# Avixzon newsroom

The News index has in-house field guides. The guide pages are server-rendered, link to the related service and quote form, and appear in the XML sitemap.

The News page can show the recent public Instagram profile grid without an API token. Visitors choose to load the official Instagram embed. It does not provide a server-side list of posts or captions. The verified post cards and their original links remain available if the embed is blocked. The Facebook profile link remains available; a Page plugin timeline was not usable for this profile.

## Feature a social post

Add the actual public post permalink to `socialPosts` in `src/lib/news.ts`. Provide a unique ID, platform, title, and a short original summary. Include the date if confirmed. Instagram post and reel permalinks, Facebook post and video permalinks, and YouTube video links are supported.

The title and summary appear as page text. The third-party embed loads only after a visitor chooses to load it. The original post link is always available in case the platform restricts embedding or the post is removed. Do not substitute profile URLs for post URLs. Never add a private post or treat a stock image as company work.

## Automatic Facebook and Instagram feed

The newsroom reads Meta on the server and revalidates every ten minutes when requested. It renders the newest published posts as HTML, with captions and links to their originals. It keeps the field guides and platform links available if the feed is unconfigured or temporarily fails. The news page shows the latest 24 items from each feed; older posts remain available on the social profiles.

Configure these in the Netlify site environment for **Builds and Functions**. Use local `.env.local` for testing; never commit credentials or use a `NEXT_PUBLIC_` prefix:

- `META_FACEBOOK_PAGE_ID` — Avixzon's numeric Facebook Page ID.
- `META_FACEBOOK_PAGE_TOKEN` — read-only Meta Page access token with the Page authorization and `pages_read_engagement` access. Page reels are requested separately; Meta's access and supported fields can differ for that edge.
- `META_INSTAGRAM_TOKEN` — production Instagram user token for Avixzon's **public professional** Instagram account, with `instagram_business_basic` authorization in an app using Instagram Login. Use a long-lived token and renew it before it expires.
- `META_INSTAGRAM_ACCOUNT_ID` — optional numeric professional account ID; defaults to `me`.
- `META_GRAPH_VERSION` — optional version override, defaults to `v27.0`.

After saving the settings, deploy and check `/news` against both public profiles. Confirm that a new published post appears after the cache refresh. Watch for access errors in Netlify logs; the application logs the platform, endpoint and error code, never the token or Meta response body. The website does not post to either platform or ingest Stories, drafts, messages, or comments.
