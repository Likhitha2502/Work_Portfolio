import { profile } from "../data";
import { useReveal } from "../hooks/useReveal";

const stats = [
  { num: "4+", label: "years building production front-ends" },
  { num: "75+", label: "React components shipped in one system" },
  { num: "11K+", label: "item datasets rendered in real time" },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section">
      <div className="container">
        <p className="eyebrow">About</p>
        <div
          ref={ref}
          className={`about-grid reveal ${visible ? "is-visible" : ""}`}
        >
          <p>{profile.about}</p>
          <div>
            {stats.map((s) => (
              <div key={s.label} className="viewport stat-card">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
