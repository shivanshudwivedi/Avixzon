"use client";

import { useState } from "react";

const videos = [
  { src: "/avixzon-logistics-hero.mp4", label: "Road transport" },
  { src: "/hero-moving.mp4", label: "Home moving" },
  { src: "/hero-ocean.mp4", label: "Ocean freight" },
  { src: "/hero-warehouse.mp4", label: "Warehousing" },
];

export function HeroVideoSequence() {
  const [active, setActive] = useState(0);
  const current = videos[active];

  return (
    <>
      <video
        key={current.src}
        className="avx-hero-video avx-video-enter"
        autoPlay
        muted
        playsInline
        preload={active === 0 ? "auto" : "metadata"}
        poster="/home2.webp"
        onEnded={() => setActive((index) => (index + 1) % videos.length)}
        onError={() => setActive((index) => (index + 1) % videos.length)}
        aria-label={`${current.label} in motion`}
      >
        <source src={current.src} type="video/mp4" />
      </video>
      <div className="avx-video-status" aria-label={`Now showing ${current.label}`}>
        <span>{String(active + 1).padStart(2, "0")} / {String(videos.length).padStart(2, "0")}</span>
        <div>
          {videos.map((video, index) => (
            <button
              type="button"
              key={video.src}
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Show ${video.label}`}
            />
          ))}
        </div>
        <strong>{current.label}</strong>
      </div>
    </>
  );
}
