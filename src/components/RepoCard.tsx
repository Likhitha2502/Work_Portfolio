import type { GithubRepo } from "../hooks/useGithubRepos";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    month: "short",
    year: "numeric",
  });
}

export default function RepoCard({ repo }: { repo: GithubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="viewport repo-card"
      style={{ display: "block" }}
    >
      <h4>{repo.name}</h4>
      <p>{repo.description ?? "No description provided."}</p>
      <div className="repo-meta">
        {repo.language && (
          <span>
            <span className="repo-lang-dot" aria-hidden="true" />
            {repo.language}
          </span>
        )}
        <span>{"\u2605"} {repo.stargazers_count}</span>
        <span>updated {formatDate(repo.updated_at)}</span>
      </div>
    </a>
  );
}
