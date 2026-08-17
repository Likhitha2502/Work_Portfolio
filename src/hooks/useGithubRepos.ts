import { useEffect, useState } from "react";

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

interface UseGithubReposResult {
  repos: GithubRepo[];
  status: "loading" | "success" | "error";
}

/**
 * Fetches public, non-fork repos for a GitHub user directly from the client.
 * The GitHub REST API allows unauthenticated requests (60/hour per IP) and
 * sends CORS headers, so this works from a static site with no backend.
 */
export function useGithubRepos(username: string, limit = 6): UseGithubReposResult {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );
        if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
        const data: GithubRepo[] = await res.json();
        if (cancelled) return;
        const filtered = data
          .filter((r) => !r.fork)
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, limit);
        setRepos(filtered);
        setStatus("success");
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [username, limit]);

  return { repos, status };
}
