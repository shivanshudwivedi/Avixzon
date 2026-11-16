const profile = "https://www.instagram.com/avixzon.ca/";

export function PublicInstagram() {
  return <div className="ops-public-instagram">
    <h3>Latest from @avixzon.ca</h3>
    <a className="ops-text-link" href={profile} target="_blank" rel="noreferrer">Visit Instagram</a>
    <iframe src={profile + "embed/"} title="Latest public posts from Avixzon on Instagram" loading="lazy" referrerPolicy="no-referrer" />
  </div>;
}
