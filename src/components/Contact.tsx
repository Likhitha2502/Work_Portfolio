import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="viewport contact-panel">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Contact
          </p>
          <h2>Let's talk about what you're building</h2>
          <p>
            {profile.status}
            {profile.openToRelocation ? " \u00b7 open to relocation." : "."}
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Email me
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
