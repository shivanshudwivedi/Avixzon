export const guides = [
  {slug:"commercial-cleaning-frequency-toronto", title:"How often should a Toronto office be cleaned?", category:"Cleaning guide", dek:"Set a cleaning schedule around occupancy, foot traffic, washrooms and shared spaces.", image:"/operations/cleaning.jpg", alt:"A janitorial worker mopping a commercial workspace", service:"cleaning-services",
    published:"2026-11-14", answer:"Check washrooms, kitchens and high-traffic spaces on occupied days. Use foot traffic and actual site conditions to decide how often the rest of the office needs a visit. Agree on separate intervals for periodic work such as carpet care and interior glass.",
    sections:[["Start with rooms people share","Map the reception, shared kitchen, washrooms, meeting rooms and main walkways. A small office that rotates teams may need a different schedule from a busy workplace with visitors throughout the day. Ask your provider to quote the shared areas and private workspaces separately."],["Plan for wet weather and road salt","In Toronto and the GTA, rain and tracked-in winter slush can change the workload at entrances. Check the mats and hard flooring during busy days, and define who will handle touch-ups between scheduled visits."],["Put exceptions in the scope","Decide who restocks soap and paper products, removes waste and resets shared rooms. Note alarm instructions and access windows. Ask for periodic deep cleaning as a separate line item so you can compare quotes on the same basis."],["Review after the first few weeks","Keep a short list of areas that need repeat attention. If complaints cluster around one room or time of day, adjust the task or timing before adding visits to the entire building."]]},
  {slug:"loading-unloading-labour-gta", title:"How to book loading and unloading labour in the GTA", category:"Labour guide", dek:"A practical checklist for crew size, dock access and work windows.", image:"/services/manpower.jpg", alt:"Warehouse workers carrying a carton together", service:"manpower-services",
    published:"2026-11-14", answer:"To request loading or unloading labour, share the job location, date and time window, load inventory, heaviest items, and available equipment. Say whether you need just the crew or also a vehicle, packing, or placement inside the site.",
    sections:[["Describe the load and where it has to go","Count pallets, cartons and oversized items. Include their approximate dimensions and weights, the distance from vehicle to destination, and whether the crew will stage, unpack or place items. For a quote, a short inventory is more useful than an estimate such as ‘one truckload.’"],["Confirm the site before choosing a crew size","A loading dock, a reserved service elevator and curbside access each affect the work differently. Identify stairs, parking and waiting limits. Confirm who owns or operates equipment such as a pallet jack, liftgate or forklift and whether the site requires an orientation."],["Allow time for handoffs","Name a contact at each end and specify what happens if the vehicle is early or late. For tight delivery windows in Toronto or surrounding municipalities, share the dispatch number and access instructions with both the carrier and the crew lead."],["Decide if a vehicle is part of the job","If your carrier is already booked, ask for labour only. If the load also needs to move between sites, request labour and local transport together and compare the scope, work window and equipment on the same quote."]]},
  {slug:"air-vs-ocean-freight", title:"Air or ocean freight?", category:"Freight guide", dek:"Choose by deadline, cargo size and budget.", image:"/operations/freight-poster.webp", alt:"Container ship beside a freight terminal", service:"freight",
    sections:[["Use air when time is tight", "Ask about air freight when the cargo is urgent and size or weight makes flying practical. The whole timeline includes collection, airport handling, clearance and final delivery."],["Use ocean for more volume", "Look at shared or full containers when the cargo is larger and dates are flexible. Compare the full origin-to-destination cost and timeline, including port handoffs."],["Gather the same details for both", "Share the commodity, piece count, packed dimensions, total weight, origin, destination and deadline. This gives you a like-for-like comparison."]]},
  {slug:"office-cleaning-quote-checklist", title:"Scope an office clean.", category:"Cleaning guide", dek:"Five details that make a cleaning quote easier.", image:"/operations/cleaning.jpg", alt:"A janitor mopping a workplace floor", service:"cleaning-services",
    sections:[["Identify the rooms", "List workspaces, washrooms, kitchens, lobbies and other common areas that need attention."],["Measure the space", "Share a rough floor area and note hard flooring, carpet and any surfaces that need special care."],["Set the schedule", "Specify the desired frequency, access hours and any security or building requirements. Flag occasional deep cleaning separately."]]},
  {slug:"small-truck-delivery-checklist", title:"Plan a small-truck delivery.", category:"Transport guide", dek:"Get the load, vehicle and site access right.", image:"/operations/transport-poster.webp", alt:"Delivery workers loading cartons into a compact cargo van", service:"transportation",
    sections:[["Measure before booking", "Share piece count, largest dimensions, total weight and whether the goods are boxed or palletized."],["Confirm access at both stops", "Check curb space, clearance, loading bays, stairs and elevators. Mention delivery windows and site contacts."],["Decide who handles the load", "Tell us whether you need people for loading, unloading or placement. Crew and vehicle needs can be scoped together."]]},
];

export type SocialPost = {
  id: string; platform: "Instagram" | "Facebook" | "YouTube"; title: string;
  summary: string; url: string; date?: string; image?: string;
};
export const socialPosts: SocialPost[] = [
  { id: "instagram-Dfm6TmjGI5x", platform: "Instagram", title: "Remembrance Day", summary: "Avixzon honours the Canadians who served and remembers those who lost their lives in service.", url: "https://www.instagram.com/p/Dfm6TmjGI5x/", date: "2026-11-11" },
  { id: "instagram-Dfd7qqpIV6y", platform: "Instagram", title: "Diwali greetings from Avixzon", summary: "The Avixzon team sends Diwali wishes to customers, friends and communities celebrating the Festival of Lights.", url: "https://www.instagram.com/p/Dfd7qqpIV6y/" },
  { id: "instagram-C9la4fRxQHl", platform: "Instagram", title: "A look at Avixzon cleaning services", summary: "An update from Avixzon on its cleaning services and how to reach the team.", url: "https://www.instagram.com/p/C9la4fRxQHl/" },
];

export function socialKey(post: SocialPost) {
  const url = new URL(post.url);
  if (post.platform === "Instagram") {
    const shortcode = url.pathname.match(/\/(p|reel|tv)\/([\w-]+)\/?$/)?.[2];
    if (shortcode) return "instagram:" + shortcode;
  }
  return url.hostname.replace(/^(www|m)\./, "") + url.pathname.replace(/\/$/, "");
}

export function socialEmbed(post: SocialPost) {
  let url: URL;
  try { url = new URL(post.url); } catch { return undefined; }
  if (url.protocol !== "https:") return undefined;
  if (post.platform === "Instagram" && ["instagram.com","www.instagram.com"].includes(url.hostname)) {
    const path = url.pathname.match(/^\/(?:[\w.]+\/)?((?:p|reel|tv)\/[\w-]+)\/?$/)?.[1];
    if (path) return "https://www.instagram.com/" + path + "/embed/";
  }
  if (post.platform === "Facebook" && ["facebook.com", "www.facebook.com"].includes(url.hostname) && /\/(posts|reel|videos)\//.test(url.pathname)) {
    const plugin = /\/(reel|videos)\//.test(url.pathname) ? "video.php" : "post.php";
    return "https://www.facebook.com/plugins/" + plugin + "?href=" + encodeURIComponent(url.origin + url.pathname) + "&show_text=false&width=500";
  }
  if (post.platform === "YouTube" && ["youtube.com","www.youtube.com","youtu.be"].includes(url.hostname)) {
    const id = url.searchParams.get("v") ?? url.pathname.split("/").at(-1);
    if (id && /^[\w-]{11}$/.test(id)) return "https://www.youtube-nocookie.com/embed/" + id;
  }
}
