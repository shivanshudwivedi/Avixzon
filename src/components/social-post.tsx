"use client";
import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { socialEmbed, type SocialPost } from "@/lib/news";

export function SocialPostCard({post}: {post: SocialPost}) {
  const [loaded, setLoaded] = useState(false);
  const embed = socialEmbed(post);
  return <article className="ops-social-post">
    {post.image && <figure><Image src={post.image} alt="" fill sizes="(max-width: 650px) 100vw, 33vw" loading="lazy" unoptimized /></figure>}
    <p className="ops-kicker">{post.platform}{post.date && <> · <time dateTime={post.date}>{post.date.slice(0, 10)}</time></>}</p>
    <h3>{post.title}</h3>{post.summary && <p className="ops-social-title">{post.summary}</p>}
    {embed && (loaded ? <iframe title={post.title + " — " + post.platform} src={embed} loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button type="button" className="ops-button" onClick={() => setLoaded(true)}><Play size={15} /> Load {post.platform} post</button>)}
    <a href={post.url} target="_blank" rel="noreferrer" className="ops-text-link">Open original post </a>
  </article>;
}
