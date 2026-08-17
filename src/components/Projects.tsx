import { featuredProjects } from "../data";
import { useReveal } from "../hooks/useReveal";

function ProjectCard({ project }: { project: (typeof featuredProjects)[number] }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`viewport project-card reveal ${visible ? "is-visible" : ""}`}
    >
      <div className="project-card-head">
        <h3>{project.name}</h3>
        <span className="project-role">{project.role}</span>
      </div>
      <span className="project-dates">{project.dates}</span>
      <p className="desc">{project.description}</p>
      <ul className="project-bullets">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="tag-row">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      {project.repoUrl && (
        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="project-link">
          View repository {"\u2197"}
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Featured work</h2>

        <div className="project-grid">
          {featuredProjects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
