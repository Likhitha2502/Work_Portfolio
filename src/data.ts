// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site --
// you should not need to touch component code for text/content changes.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Likhitha Shrinivas Gudalwar",
  role: "Software Engineer",
  headline:
    "Building responsive, high-performance interfaces for real-time, data-dense systems.",
  location: "Malden, MA",
  openToRelocation: true,
  status:
    "Open to Software engineer, Front-end Engineer and React developer roles (open to relocation)",
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
    title: "Software Engineer",
    org: "AES Corporation",
    dates: "July 2022 - Present",
    bullets: [
      "Resolved a freezing issue on the platform's data-heavy geo page, surfaced by a customer instance visualizing alerts and faults across 1,500+ deployed units (subscribers, hybrids, iplinks), implementing React virtualization within a Mapbox (react-map-gl) interface to render 11,000+ fault entries in ~2 second post-fetch.",
      "Executed front-end features on schedule across 60+ two-week Scrum sprints and the team's later shift to Kanban, partnering with a 9-person cross-functional team (backend, UX, product, business analysts) to translate requirements into polished, cross-browser interfaces.",
      "Engineered production ready React/TypeScript components each sprint from Figma design specs, converting UI designer handoffs (layouts, SVGs, interaction states) into reusable components integrated with RESTful APIs via fetch and Axios.",
      "Minimized duplicate code across an estimated 25% of the application's UI by consolidating recurring patterns, including modals, icons, and form components, into 75+ reusable global React components, driving front-end architectural decisions.",
      "Optimized a heavily loaded toggle-list page from ~7 seconds of lag to under 1 second by implementing front-end pagination (100 items per page) alongside code-splitting, memoization, and lazy loading.",
      "Improved code quality by documenting UI components in Storybook with isolated interaction tests for foundational elements (form inputs, submit buttons, dialog/modal) and writing Jest unit and integration tests (80%+ coverage on feature slices), holding the team's defect rate to ~1-2 bugs/month.",
      "Ensured real-time data flow from field hardware via persistent WebSocket connections with 5-second health checks, handling that state reactively with RxJS and Redux-Observable for import/export API flows.",
      "Coordinated code reviews, pull requests, and merge requests across GitLab branches, maintaining clean, peer-reviewed code before it reached the dev and QA environments.",
      "Delivered patch releases for a legacy PHP-based Network Management System, the predecessor platform Intellinet Network Control Center (INCC) evolved from, keeping the older system stable for the field users who still rely on it.",
      "Assisted a 6-month intern on the INCC team by clarifying task requirements and troubleshooting codebase questions, helping them ramp up with confidence."
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
    name: "Readopotamus",
    role: "Backend Developer",
    dates: "July 2026 - Present",
    description: "Full-stack reading tracker supporting five reading formats, built by a 2-person team.",
    bullets: [
      "Developed and containerized 19+ REST APIs with Java, Spring Boot, and Docker for consistent dev environment parity, securing private access to each user's reading data through self-designed JWT authentication, and modeling a normalized PostgreSQL schema supporting five reading formats with page-based and percentage-based progress tracking.",
      "Strengthened API reliability by writing unit tests for service classes and implementing a global exception handler with custom cases for specific error scenarios, returning meaningful errors for invalid input and data failures.",
      "Integrated the Open Library REST API for book, author, and title search, parsing and reformatting response data into the application's schema, with graceful handling of incomplete metadata and API failures."
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST API", "JWT", "Postman"],
    repoUrl: "https://gitlab.com/NagaBhavya/personal-library",
  },
  {
    name: "ProcastiNot",
    role: "Frontend Lead",
    dates: "Mar 2026 - Present",
    description: "Task manager with a built-in focus-timer, built by a 3-person team.",
    bullets: [
      "Directed front-end development on a 3-person team, coordinating UI/component architecture decisions through team consensus and overseeing API integration for a task management app with built-in focus-timer sessions.",
      "Implemented the full front-end task lifecycle (create, edit, delete) through modal forms supporting priority levels, due dates, and status, with client-side sorting and filtering across the task list.",
      "Enforced secure API access by attaching backend-issued JWT tokens to every authenticated request, supporting registration, login, and forgot-password flows with client-side validation.",
      "Structured application state with Redux (react-redux) and wrote unit tests for reducers, actions, selectors, and epics using Jest, keeping coverage above 85%.",
      "Modernizing the front-end from React to Angular 19 (in progress), preserving existing feature parity while adopting NgRx (Store and Effects), Angular Material, and Reactive Forms.",
      "Assessed UI color contrast, text readability, and overall usability for accessibility using Chrome DevTools during manual and system testing, in the absence of a dedicated QA team."
    ],
    tags: ["React", "TypeScript", "Redux", "JWT", "Jest", "Angular 19", "NgRx"],
    repoUrl: "https://github.com/Likhitha2502/ProcastiNot_Project",
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
    label: "Design & Component Tooling",
    items: ["Figma (design-to-code implementation)", "Storybook (component documentation & interaction testing)", "Material UI"]
  },
  {
    label: "State Management & Reactive Programming",
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
    label: "Backend Development",
    items: ["RESTful APIs", "Java", "Spring Boot", "JWT Authentication"],
  },
  {
    label: "Databases",
    items: ["SQL", "PostgreSQL", "MySQL", "PHP"]
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
