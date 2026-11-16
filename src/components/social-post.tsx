import Image from "next/image";
import { socialEmbed, type SocialPost } from "@/lib/news";

export function SocialPostCard({post, embedPost = true}: {post: SocialPost; embedPost?: boolean}) {
  const embed = embedPost ? socialEmbed(post) : undefined;
  return <article className="ops-social-post">
    {post.image && <figure><Image src={post.image} alt="" fill sizes="(max-width: 650px) 100vw, 33vw" loading="lazy" unoptimized /></figure>}
    <p className="ops-kicker">{post.platform}{post.date && <> · <time dateTime={post.date}>{post.date.slice(0, 10)}</time></>}</p>
    <h3>{post.title}</h3>{post.summary && <p className="ops-social-title">{post.summary}</p>}
    {embed && <iframe title={post.title + " — " + post.platform} src={embed} loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin" />}
    <a href={post.url} target="_blank" rel="noreferrer" className="ops-text-link">Open original post </a>
  </article>;
}
