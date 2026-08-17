import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <p className="eyebrow">Education</p>
        <h2 className="section-title">Academic background</h2>
        {education.map((e) => (
          <div key={e.school} className="viewport edu-entry">
            <div>
              <h3>{e.school}</h3>
              <span className="degree">{e.degree}</span>
            </div>
            <span className="edu-dates">{e.dates}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
