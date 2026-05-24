export const profile = {
  name: "Zeeshan Amjad",
  role: "Software Engineer",
  tagline:
    "I'm a software engineer who builds across test automation, backend systems, and AI-assisted software. I like turning messy manual work into systems that hold up.",
  location: "Pakistan · Remote",
  email: "zeeshan04956@gmail.com",
  github: "https://github.com/ZeeshanAmjad0495",
  linkedin: "https://www.linkedin.com/in/zeeshan-amjad-bb08ab185/",
  upwork: "",
  availability:
    "Open to freelance and contract work: automation systems, AI-assisted workflows, backend automation, multi-tenant SaaS tools, and scraping or reporting pipelines.",
  yearsExperience: 4,
} as const;

export const about = {
  summary:
    "I'm a software engineer. For the past four years my professional work has been test automation and quality engineering at Arbisoft, and alongside it I build the kind of software I test: multi-tenant SaaS backends, an automation framework, and AI-assisted developer tools.",
  bridge:
    "My day job is test automation, and that work is real. The systems I build on my own run wider and deeper: full-stack and backend-heavy, with their own databases, auth, audit trails, and test suites.",
  personal:
    "Outside the editor I read a lot, train, and chase questions in philosophy, psychology, and metaphysics. That sensibility shows up here more in how the site feels than in anything I'd say out loud.",
  highlights: [
    { value: "4+", label: "Years in QA & automation" },
    { value: "7", label: "Systems built" },
    { value: "50+", label: "APIs validated" },
    { value: "1,000+", label: "Automated tests written" },
  ],
};

export const domains = [
  {
    name: "Online learning (MOOC)",
    note: "Web automation, regression coverage, and workflow validation.",
  },
  {
    name: "Online multiplayer gaming",
    note: "Load testing, regression optimization, and reliability checks.",
  },
  {
    name: "Online assessment",
    note: "Automation coverage for assessment workflows.",
  },
  {
    name: "Insurance data extraction",
    note: "Bot validation, extraction accuracy, and edge-case testing.",
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
      "Build and maintain automated test suites with Playwright, Cypress, TypeScript, and JavaScript across four products: a MOOC platform, an online multiplayer game, an online assessment platform, and a US dental-insurance data-extraction product.",
      "Automated around 30 cases for the learning platform, two flows for the assessment platform, and five to six load scenarios for the game, covering critical workflows and regression paths.",
      "Tested 50+ APIs with Postman and automated validation, checking request and response behavior, data, and backend workflow correctness.",
      "Integrated and maintained automated test runs in GoCD pipelines for CI regression and deployment checks.",
      "Cut the game's regression run time by about 10% by automating repeated validation flows and steadying execution.",
      "Investigated and reduced 50+ flaky tests by working through selectors, app state, network calls, logs, timing, and test data.",
      "Validated the dental-insurance extraction bot for accuracy and edge cases across many insurer websites.",
      "Improved reliability with reusable fixtures, cleaner test structure, stronger selectors, and retry-aware flows.",
    ],
  },
  {
    role: "Product Support Engineer",
    company: "Techlogix",
    location: "Lahore, Pakistan",
    period: "Jun 2021 – Jan 2022",
    current: false,
    points: [
      "Supported enterprise software users by investigating issues, reproducing defects, and coordinating fixes with engineering.",
      "Analyzed application behavior, user workflows, logs, and data to find root causes and write up clear findings.",
      "Worked with customers and internal teams to troubleshoot production issues and keep their status visible.",
      "Built a foundation in defect analysis, product behavior, and customer-facing troubleshooting.",
    ],
  },
];

export const aiIntro =
  "I use AI as a working partner, not a shortcut. It helps me plan architecture, draft implementations, review diffs, think through test strategy and edge cases, and keep documentation honest. I work with Claude and Claude Code, OpenAI, DeepSeek, and local models, and I keep human judgment, quality gates, and accountability in the loop. What I care about is the workflow: AI that helps plan, build, test, and review software under clear rules.";

export const aiPractices = [
  {
    title: "Architecture planning",
    detail: "Sketching system shape, boundaries, and tradeoffs before any code.",
  },
  {
    title: "Implementation drafting",
    detail: "Turning a plan into first-pass code that I then review and harden.",
  },
  {
    title: "Code review",
    detail: "A second pass over diffs for bugs, edge cases, and risk.",
  },
  {
    title: "Test strategy",
    detail: "Finding the cases worth covering and the ones likely to break.",
  },
  {
    title: "Product planning",
    detail: "Shaping features and scope for the SaaS work.",
  },
  {
    title: "Local LLMs",
    detail: "Running smaller models locally to keep agent work affordable.",
  },
  {
    title: "Cost-aware routing",
    detail: "Sending each task to a model that fits its difficulty and price.",
  },
  {
    title: "Human-supervised agents",
    detail: "Letting agents do the work behind approval gates and evidence.",
  },
];

export const certifications = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp", status: "Completed" },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    status: "Completed",
  },
  { name: "ISTQB CTFL 4.0", issuer: "ASTQB", status: "In progress" },
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
  { href: "#arsenal", label: "Arsenal" },
  { href: "#world-map", label: "World Map" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
