import { socialKey, type SocialPost } from "./news";

type Row = {
  id?: string; message?: string; description?: string; caption?: string;
  created_time?: string; updated_time?: string; timestamp?: string;
  permalink_url?: string; permalink?: string; full_picture?: string;
  media_type?: string; media_url?: string; thumbnail_url?: string; picture?: string;
  is_published?: boolean; is_hidden?: boolean; is_expired?: boolean; published?: boolean;
  privacy?: { value?: string }; targeting?: Record<string, unknown>;
};
const accounts = {
  Facebook: ["facebook.com", "www.facebook.com", "m.facebook.com"],
  Instagram: ["instagram.com", "www.instagram.com"],
};
const limit = 24;

function secureUrl(value?: string) {
  try { const url = new URL(value ?? ""); return url.protocol === "https:" && !url.username && !url.password ? url : undefined; } catch { return undefined; }
}

function safeImage(value?: string) {
  const url = secureUrl(value);
  return url && /(^|\.)(fbcdn\.net|cdninstagram\.com|fbsbx\.com)$/.test(url.hostname) ? url.href : undefined;
}

function normalize(row: Row, platform: keyof typeof accounts, reel = false): SocialPost | undefined {
  const url = secureUrl(row.permalink ?? row.permalink_url);
  if (!row.id || !url || !accounts[platform].includes(url.hostname)) return;
  if (platform === "Facebook" && (row.is_published === false || row.is_hidden === true || row.is_expired === true || (row.privacy?.value && row.privacy.value !== "EVERYONE") || Object.keys(row.targeting ?? {}).length > 0 || (reel && row.published !== true))) return;
  if (platform === "Instagram" && !/^\/(?:[\w.]+\/)?(p|reel|tv)\/[\w-]+\/?$/.test(url.pathname)) return;
  const caption = (row.caption ?? row.message ?? row.description ?? "").trim();
  const time = Date.parse(row.timestamp ?? row.created_time ?? row.updated_time ?? "");
  const date = Number.isFinite(time) ? new Date(time).toISOString() : undefined;
  const image = safeImage(row.full_picture ?? row.thumbnail_url ?? row.picture ?? (row.media_type !== "VIDEO" ? row.media_url : undefined));
  return { id: platform + ":" + row.id, title: "Avixzon on " + platform, platform, summary: caption, url: url.href, date, image };
}

async function loadEdge(host: "graph.facebook.com" | "graph.instagram.com", id: string, edge: string, fields: string, token: string, platform: keyof typeof accounts, reel = false) {
  const version = process.env.META_GRAPH_VERSION ?? "v27.0";
  if (!/^v\d+\.\d+$/.test(version) || !/^(me|\d+)$/.test(id)) return [];
  const endpoint = new URL(`https://${host}/${version}/${id}/${edge}`);
  endpoint.searchParams.set("fields", fields);
  endpoint.searchParams.set("limit", String(limit));
  try {
    const response = await fetch(endpoint, { headers: { Authorization: "Bearer " + token }, next: { revalidate: 600 }, signal: AbortSignal.timeout(4500) });
    const payload = await response.json() as {data?: Row[]; error?: {code?: number}};
    if (!response.ok || !Array.isArray(payload.data)) {
      console.warn("[Avixzon news] Meta", platform, edge, "request failed", response.status, payload.error?.code ?? "");
      return [];
    }
    return payload.data.flatMap(row => {
      const post = normalize(row, platform, reel);
      return post ? [post] : [];
    });
  } catch {
    console.warn("[Avixzon news] Meta", platform, edge, "request unavailable");
    return [];
  }
}

export async function getMetaPosts() {
  const page = process.env.META_FACEBOOK_PAGE_ID;
  const pageToken = process.env.META_FACEBOOK_PAGE_TOKEN;
  const instagramToken = process.env.META_INSTAGRAM_TOKEN;
  const instagramId = process.env.META_INSTAGRAM_ACCOUNT_ID ?? "me";
  const [facebook, reels, instagram] = await Promise.all([
    page && pageToken ? loadEdge("graph.facebook.com", page, "published_posts", "id,message,permalink_url,created_time,full_picture,is_published,is_hidden,is_expired,privacy,targeting", pageToken, "Facebook") : [],
    page && pageToken ? loadEdge("graph.facebook.com", page, "video_reels", "id,description,permalink_url,created_time,picture,published", pageToken, "Facebook", true) : [],
    instagramToken ? loadEdge("graph.instagram.com", instagramId, "media", "id,caption,permalink,media_type,media_url,thumbnail_url,timestamp", instagramToken, "Instagram") : [],
  ]);
  const keys = new Set<string>();
  return [...facebook, ...reels, ...instagram].filter(post => {
    const canonical = socialKey(post);
    if (keys.has(post.id) || keys.has(canonical)) return false;
    keys.add(post.id);
    keys.add(canonical);
    return true;
  }).sort((a,b) => (b.date ?? "").localeCompare(a.date ?? ""));
}
