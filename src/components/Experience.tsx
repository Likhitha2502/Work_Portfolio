import { experience } from "../data";
import { useReveal } from "../hooks/useReveal";

function ExperienceCard({ entry }: { entry: (typeof experience)[number] }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`viewport exp-entry reveal ${visible ? "is-visible" : ""}`}
    >
      <div className="exp-head">
        <h3>{entry.title}</h3>
        <span className="exp-dates">{entry.dates}</span>
      </div>
      <span className="exp-org">{entry.org}</span>
      <ul className="exp-bullets">
        {entry.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">Where the work happens</h2>
        {experience.map((entry) => (
          <ExperienceCard key={entry.org} entry={entry} />
        ))}
      </div>
    </section>
  );
}
