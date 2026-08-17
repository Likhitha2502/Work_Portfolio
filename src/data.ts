// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site --
// you should not need to touch component code for text/content changes.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Likhitha Shrinivas Gudalwar",
  role: "Front-End Software Engineer",
  headline:
    "Building responsive, high-performance interfaces for real-time, data-dense systems.",
  location: "Malden, MA",
  openToRelocation: true,
  status:
    "Open to front-end engineer, React developer, and QA/SDET roles in New England",
  email: "likhithagudalwar@gmail.com",
  linkedin: "https://www.linkedin.com/in/likhitha-gudalwar/",
  github: "https://github.com/Likhitha2502",
  githubUsername: "Likhitha2502",
  resumeFile: "/resume.pdf",
  about:
    "I'm a Front-End Software Engineer with 4+ years of experience building responsive, high-performance interfaces in React and TypeScript. Most of that time was spent inside a real-time network control center, turning live geospatial and telemetry data into interfaces engineers can actually act on. Outside my day job, I'm pursuing an M.S. in Computer Information Sciences with a focus on software engineering and testing, and building full-stack side projects to round out my testing and backend fluency.",
};

export type Bullet = string;

export interface ExperienceEntry {
  title: string;
  org: string;
  dates: string;
  bullets: Bullet[];
}

export const experience: ExperienceEntry[] = [
  {
    title: "Front-End Software Engineer",
    org: "AES Corporation - Intellinet Network Control Center (INCC)",
    dates: "July 2022 - Present",
    bullets: [
      "Eliminated freezing on a data-heavy geo page by implementing React virtualization within a Mapbox (react-map-gl) interface, rendering 11,000+ item datasets in ~2 seconds once data was received from the backend.",
      "Delivered front-end features on schedule across 60+ two-week Scrum sprints and the team's later shift to Kanban, partnering with a 9-person cross-functional team that included backend engineers, UX designers, product managers, and business analysts to translate requirements into polished, cross-browser-consistent interfaces.",
      "Built and maintained cross-browser React.js and TypeScript components integrated with RESTful APIs via fetch and Axios, keeping behavior consistent across Chrome, Firefox, and Safari.",
      "Drove front-end architectural decisions by building and maintaining 75+ React components over the project's four-year lifecycle, consolidating recurring UI patterns like modals, icons, and form components into shared, global components and cutting duplicate code across an estimated 25% of the application's UI.",
      "Sped up a heavily-loaded toggle-list page from roughly 7 seconds of lag to under 1 second by implementing front-end pagination (100 items per page) alongside code-splitting, memoization, and lazy loading.",
      "Strengthened code quality by writing Jest unit and integration tests (80%+ coverage on feature slices) and reviewing pull requests before they reached QA, holding the team's front-end defect rate to roughly 1-2 bugs a month.",
      "Sustained real-time data flow from field hardware by maintaining persistent WebSocket connections with a 5-second connection health check, handling that state reactively with RxJS and Redux-Observable for import/export API flows.",
      "Streamlined deployability by managing GitLab feature branches, pull requests, and code reviews as part of a CI/CD workflow that deployed to the dev environment on ticket merge and to QA weekly.",
    ],
  },
];

export interface ProjectEntry {
  name: string;
  role: string;
  dates: string;
  description: string;
  bullets: Bullet[];
  tags: string[];
  /** Fill in with the exact repo URL once published */
  repoUrl?: string;
}

export const featuredProjects: ProjectEntry[] = [
  {
    name: "ProcastiNot",
    role: "Frontend Lead",
    dates: "Mar 2026 - Present",
    description: "Task manager with a built-in focus-timer, built by a 3-person team.",
    bullets: [
      "Directed front-end architecture and API integration as Frontend Lead on a 3-person team.",
      "Built the full task lifecycle - create, edit, delete, sort, and filter - through modal forms for priority, due date, and status.",
      "Implemented JWT-based authentication across registration, login, and forgot-password flows, validated on both client and server.",
      "Managed application state with Redux (react-redux), holding 85%+ Jest coverage across reducers, actions, selectors, and epics.",
      "Rebuilding the frontend in Angular 19 (in progress) with NgRx, Angular Material, and Reactive Forms.",
      "Evaluated UI color contrast, text readability, and overall usability for users with accessibility needs using browser accessibility tools.",
    ],
    tags: ["React", "Redux", "JWT", "Jest", "Angular 19", "NgRx"],
    repoUrl: "https://github.com/Likhitha2502", // TODO: replace with the exact repo URL
  },
  {
    name: "Readopotamus",
    role: "Backend Developer",
    dates: "July 2026 - Present",
    description: "Full-stack reading tracker supporting five reading formats, built by a 2-person team.",
    bullets: [
      "Designed REST APIs with Java and Spring Boot for secure, private access to each user's reading data.",
      "Modeled a normalized PostgreSQL schema supporting five reading formats with page-based and percentage-based progress tracking.",
      "Integrated the Open Library REST API for book search and metadata, with graceful handling of incomplete metadata and API failures.",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
    repoUrl: "https://github.com/Likhitha2502", // TODO: replace with the exact repo URL
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Angular 19",
      "Node.js",
      "HTML5",
      "CSS3",
      "jQuery",
      "Responsive Web Design",
    ],
  },
  {
    label: "State Management & Reactive",
    items: ["Redux", "Redux-Observable", "RxJS", "NgRx (Store, Effects)"],
  },
  {
    label: "Testing & Tooling",
    items: [
      "Jest",
      "Playwright",
      "Git",
      "GitHub",
      "GitLab",
      "Docker",
      "NPM/Yarn",
      "CI/CD Pipelines",
      "Agile (Scrum, Kanban)",
    ],
  },
  {
    label: "APIs & Backend (Familiar)",
    items: ["RESTful APIs", "SQL", "PostgreSQL", "MySQL", "Java", "Spring Boot", "PHP"],
  },
  {
    label: "CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "Complexity Analysis",
      "N-Tier Architecture",
    ],
  },
];

export interface EducationEntry {
  school: string;
  degree: string;
  dates: string;
}

export const education: EducationEntry[] = [
  {
    school: "Harrisburg University of Science and Technology",
    degree: "M.S., Computer Information Sciences - Software Engineering & Testing",
    dates: "July 2025 - Present",
  },
  {
    school: "University of Massachusetts Lowell",
    degree: "B.S., Computer Science",
    dates: "June 2022",
  },
];
