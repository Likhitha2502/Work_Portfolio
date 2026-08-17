import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="status-pill">
          <span className="pulse" aria-hidden="true" />
          {profile.status}
        </div>
        <p className="role-line">// {profile.role.toUpperCase()}</p>
        <h1>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
          <a href={profile.resumeFile} className="btn btn-ghost" download>
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
