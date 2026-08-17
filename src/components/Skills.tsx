import { skills } from "../data";
import { useReveal } from "../hooks/useReveal";

function SkillGroupCard({ group }: { group: (typeof skills)[number] }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`viewport skill-group reveal ${visible ? "is-visible" : ""}`}
    >
      <h3>{group.label}</h3>
      <div className="skill-chip-row">
        {group.items.map((item) => (
          <span key={item} className="skill-chip">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">Toolkit</h2>
        <div className="skills-grid">
          {skills.map((g) => (
            <SkillGroupCard key={g.label} group={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
