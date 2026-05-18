export const profile = {
  name: "Zeeshan Amjad",
  role: "Software Engineer",
  tagline:
    "I build maintainable test automation that keeps web apps, APIs, and CI pipelines honest — and I design AI-assisted workflows that make software delivery faster and safer.",
  location: "Pakistan · Remote-ready",
  email: "zeeshan04956@gmail.com",
  github: "https://github.com/ZeeshanAmjad0495",
  linkedin: "https://www.linkedin.com/in/zeeshan-amjad-bb08ab185/",
  yearsExperience: 4,
} as const;

export const about = {
  summary:
    "QA Automation Engineer / SDET with 4 years of experience in web automation, API testing, regression testing, accessibility testing, and performance/load testing. Strong hands-on experience with Playwright, Cypress, TypeScript, JavaScript, Postman, GoCD, and GitHub Actions, building maintainable test automation frameworks.",
  detail:
    "I've validated frontend workflows, backend API behavior, CI/CD execution, test data, and bot-driven data-extraction flows across MOOC, online gaming, online assessment, and insurance automation products. I also use Claude and OpenAI/ChatGPT for requirements analysis, test-case ideation, debugging support, automation planning, and agentic SDLC/STLC workflow design.",
  highlights: [
    { value: "4+", label: "Years in QA automation" },
    { value: "50+", label: "APIs validated" },
    { value: "50+", label: "Flaky tests stabilized" },
    { value: "4", label: "Production-scale products" },
  ],
};

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Test Automation",
    skills: [
      "Playwright",
      "Cypress",
      "Puppeteer",
      "Selenium",
      "Jest",
      "E2E Testing",
      "Regression",
      "Integration",
      "Accessibility",
    ],
  },
  {
    title: "API & Backend Validation",
    skills: [
      "Postman",
      "REST APIs",
      "Request/Response Validation",
      "API Contract Checks",
      "Backend Flow Analysis",
      "Test Data Validation",
    ],
  },
  {
    title: "Performance & Reliability",
    skills: [
      "k6",
      "Locust",
      "Grafana k6",
      "Load Testing",
      "Flaky Test Investigation",
      "Test Stability",
      "Root-Cause Analysis",
    ],
  },
  {
    title: "CI/CD & Tooling",
    skills: [
      "GoCD",
      "GitHub Actions",
      "Git",
      "Docker",
      "CI Test Execution",
      "Pipeline Validation",
      "Test Reporting",
    ],
  },
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    title: "AI-Assisted Engineering",
    skills: [
      "Claude",
      "OpenAI / ChatGPT",
      "Prompt-Driven Analysis",
      "Test Planning",
      "SDLC Workflow Design",
      "AI-Assisted Debugging",
    ],
  },
];

export const experience = [
  {
    role: "Software Automation Engineer / SDET",
    company: "Arbisoft",
    location: "Lahore, Pakistan / Remote",
    period: "Feb 2022 – Present",
    current: true,
    points: [
      "Built and maintained automated test suites using Playwright, Cypress, TypeScript, and JavaScript across edX, Xiangqi, LitmusTest, and Zuub.",
      "Automated ~30 test cases for edX, 2 automation flows for LitmusTest, and 5–6 load-testing scenarios for Xiangqi, covering critical workflows, regression paths, and platform-specific validation.",
      "Tested 50+ APIs using Postman and automated validation, covering request/response behavior, data validation, and backend workflow correctness.",
      "Integrated and maintained automated test execution in GoCD pipelines, supporting CI-based regression checks and deployment validation.",
      "Reduced Xiangqi regression execution time by ~10% by automating repeated validation flows and improving execution reliability.",
      "Investigated and reduced 50+ flaky test issues by reviewing selectors, application state, network calls, logs, API responses, timing, and test data.",
      "Validated Zuub data-extraction bot behavior for American dental insurance websites, covering extraction accuracy, edge cases, and workflow reliability.",
      "Improved automation reliability through reusable fixtures, cleaner test structure, stronger selectors, better test data handling, and retry-aware workflows.",
    ],
  },
  {
    role: "Product Support Engineer",
    company: "Techlogix",
    location: "Lahore, Pakistan",
    period: "Jun 2021 – Jan 2022",
    current: false,
    points: [
      "Supported enterprise software users by investigating issues, reproducing defects, and coordinating with engineering teams for resolution.",
      "Analyzed application behavior, user workflows, logs, and data issues to identify root causes and document clear findings.",
      "Communicated with customers and internal teams to troubleshoot production issues and maintain clear issue visibility.",
      "Built a practical foundation in defect analysis, product behavior, customer-facing troubleshooting, and software support.",
    ],
  },
];

export const domains = [
  {
    name: "edX",
    note: "MOOC / online learning — web automation, regression coverage, workflow validation.",
  },
  {
    name: "Xiangqi",
    note: "Online multiplayer Chinese chess — load testing, regression optimization, reliability validation.",
  },
  {
    name: "LitmusTest",
    note: "Online test platform — automation coverage for assessment workflows.",
  },
  {
    name: "Zuub",
    note: "US dental insurance data extraction — bot support, extraction validation, edge-case testing.",
  },
];

export type Project = {
  name: string;
  subtitle: string;
  featured?: boolean;
  tags: string[];
  points: string[];
};

export const projects: Project[] = [
  {
    name: "ForgeLoop Suite",
    subtitle: "Agentic SDLC / STLC Automation Platform",
    featured: true,
    tags: [
      "AI Agents",
      "QA Automation",
      "Claude",
      "OpenAI / ChatGPT",
      "SDLC/STLC Workflows",
    ],
    points: [
      "A project-aware, human-supervised AI workflow platform for requirements intake, ticket generation, implementation workflows, QA gates, CI feedback, testing evidence, audit artifacts, and long-term project memory.",
      "Uses Claude and OpenAI/ChatGPT for AI-assisted requirement analysis, planning, test strategy, review loops, and agent-guided engineering workflows.",
      "Built around deterministic QA checks, human approval gates, project-context management, and evidence-based software delivery.",
    ],
  },
  {
    name: "Sentinel",
    subtitle: "Web Automation Framework",
    tags: ["TypeScript", "Playwright", "Framework Design", "CI/CD"],
    points: [
      "Tool-agnostic web automation framework focused on reusable components, stable selectors, scalable test architecture, and maintainable flows.",
      "Hybrid Component Object Model + Functional Page Model approach separating page structure from business workflows.",
      "Reusable fixtures, environment configuration, structured test flows, and clearer automation event patterns.",
    ],
  },
  {
    name: "Automated Web Scraping & Reporting Tool",
    subtitle: "Data Extraction & Reporting",
    tags: [
      "TypeScript / JavaScript",
      "Automation",
      "Data Extraction",
      "Data Validation",
      "Reporting",
    ],
    points: [
      "Automation workflows for extracting data from multiple websites and generating structured reports.",
      "Validation checks to improve data accuracy and handle edge cases during extraction and reporting.",
    ],
  },
];

export const certifications = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp", status: "Completed" },
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    status: "Completed",
  },
  { name: "ASTQB CTFL 4.0", issuer: "ISTQB / ASTQB", status: "In progress" },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "In progress",
  },
];

export const education = [
  { degree: "FSc Pre-Engineering", detail: "Pakistan" },
  { degree: "GCE O Levels", detail: "1 A*, 6 A's, 1 B" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
