"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

const reels = [
  {label: "Local transport", slug: "transportation", clip: "/operations/transport.mp4", poster: "/operations/transport-poster.webp"},
  {label: "Commercial cleaning", slug: "cleaning-services", clip: "/operations/clean.mp4", poster: "/operations/clean-poster.webp"},
  {label: "Freight forwarding", slug: "freight", clip: "/hero-ocean.mp4", poster: "/operations/freight-poster.webp"},
  {label: "Manpower support", slug: "manpower-services", clip: "/hero-warehouse.mp4", poster: "/operations/warehouse-poster.webp"},
];

export function OperationsReel({children}: {children: React.ReactNode}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reel = reels[index];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPlaying(!mq.matches && !(navigator as Navigator & {connection?: {saveData?: boolean}}).connection?.saveData);
    sync();
    mq.addEventListener("change", sync);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {threshold: 0.1});
    if (root.current) observer.observe(root.current);
    return () => { observer.disconnect(); mq.removeEventListener("change", sync); };
  }, []);

  useEffect(() => {
    const clip = video.current;
    if (!clip) return;
    if (playing && visible) void clip.play().catch(() => {});
    else clip.pause();
  }, [index, playing, visible]);

  function select(next: number) {
    if (next !== index) { setReady(false); setIndex(next); }
  }
  return <section className="ops-hero" ref={root} aria-label="Avixzon services introduction">
    <div className="ops-hero-media" aria-hidden="true">
      <Image key={reel.poster} src={reel.poster} alt="" fill sizes="100vw" preload={index === 0} />
      {(playing || ready) && <video ref={video} key={reel.clip} src={reel.clip} muted playsInline preload="none" className={ready ? "is-ready" : ""} onPlaying={() => setReady(true)} onEnded={() => select((index + 1) % reels.length)} onError={() => {setPlaying(false); setReady(false);}} />}
    </div>
    <div className="ops-hero-scrim" />
    <div className="ops-wrap ops-hero-inner">{children}
      <div className="ops-reel">
        <div className="ops-reel-top"><span>FIELD NOTES / 0{index + 1}</span><Link href={"/services/" + reel.slug}>{reel.label} </Link><button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause background video" : "Play background video"}>{playing ? <Pause size={16} /> : <Play size={16} />}</button></div>
        <div className="ops-reel-tabs" role="group" aria-label="Background video scenes">{reels.map((entry, i) => <button type="button" key={entry.slug} aria-label={"Show " + entry.label} aria-pressed={index === i} onClick={() => select(i)}><span /></button>)}</div>
      </div>
    </div>
  </section>;
}

export function SiteMotion() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.animate([{transform: "translateY(18px)", opacity: 0.55}, {transform: "translateY(0)", opacity: 1}], {duration: 620, easing: "cubic-bezier(.2,.8,.2,1)"});
        observer.unobserve(entry.target);
      }
    }, {threshold: .14});
    const watch = () => document.querySelectorAll("[data-reveal]").forEach((el) => {
      if (!el.hasAttribute("data-reveal-seen")) {
        el.setAttribute("data-reveal-seen", "");
        observer.observe(el);
      }
    });
    watch();
    const changes = new MutationObserver(watch);
    changes.observe(document.getElementById("main-content") ?? document.body, {childList: true, subtree: true});
    return () => { changes.disconnect(); observer.disconnect(); };
  }, []);
  return null;
}
