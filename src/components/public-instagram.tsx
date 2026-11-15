"use client";

import { useState } from "react";

const profile = "https://www.instagram.com/avixzon.ca/";

export function PublicInstagram() {
  const [loaded, setLoaded] = useState(false);
  return <div className="ops-public-instagram">
    <div><h3>Latest from @avixzon.ca</h3><p>See recent posts from Avixzon’s public Instagram profile.</p></div>
    <div className="ops-actions">
      {!loaded && <button type="button" className="ops-button" onClick={() => setLoaded(true)}>Load Instagram feed</button>}
      <a className="ops-text-link" href={profile} target="_blank" rel="noreferrer">Visit Instagram</a>
    </div>
    {loaded && <iframe src={profile + "embed/"} title="Latest public posts from Avixzon on Instagram" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />}
  </div>;
}
