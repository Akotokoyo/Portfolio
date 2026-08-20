export const siteConfig = {
  name: "Giorgia Tedde",
  title: "Unity Gameplay Programmer",
  tagline:
    "Unity gameplay programmer with 7+ years in production. Shipped and maintained player-facing features on live mobile titles with 100M+ downloads. Currently leads Unity development on Chimera, an indie turn-based RPG — combat systems, tactical AI, Addressables streaming, and designer-facing editor tooling.",
  email: "giorgiatedde@hotmail.com",
  phone: "+39 349 115 5000",
  location: "Savona, Liguria, Italy (open to relocation)",
  availability: "Open to work",
  linkedin: "https://www.linkedin.com/in/giorgia-tedde-261b52172",
  github: "https://github.com/Akotokoyo",
  resumeUrl: "/GiorgiaTedde-2026.pdf",
  profileImage: "/images/profile.png",
};

export const stats = [
  { label: "Unity in production", value: "7+ years" },
  { label: "Live mobile titles", value: "100M+ downloads" },
  { label: "Core stack", value: "Unity / C#" },
];

export const aboutFeatures = [
  {
    title: "Production gameplay programming",
    description:
      "Combat, movement, AI, abilities, and game feel — turning design intent into stable, performant systems on real hardware.",
  },
  {
    title: "Live mobile & indie PC/console",
    description:
      "From high-traffic always-on titles at Miniclip to indie RPG development with modular, data-driven architecture.",
  },
  {
    title: "Modular, data-driven architecture",
    description:
      "ScriptableObjects, event-driven systems, and reusable Unity modules that keep projects scalable and maintainable.",
  },
  {
    title: "Profiling & online integration",
    description:
      "CPU/GPU profiling for 60 fps targets on mobile, plus client–server work with Erlang/AWS in production environments.",
  },
];

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
  projects: { name: string; url?: string; image?: string }[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2025 – Present",
    company: "Elco · Cairo Montenotte, Savona, Italy",
    role: "Software Developer",
    description:
      "Lead a small engineering team delivering and maintaining JavaScript-based web applications for hospital and healthcare environments. Work across the product stack in JavaScript (frontend and backend).",
    tags: ["JavaScript", "Team leadership", "Healthcare software", "Web applications"],
    projects: [],
  },
  {
    period: "2024 – Present",
    company: "Chimera · Independent team (5 developers)",
    role: "Lead Gameplay Developer",
    description:
      "Own end-to-end Unity gameplay on a turn-based RPG for PC/console: combat, ability systems, and tactical enemy AI. Built a designer-facing level-authoring pipeline with Addressables runtime streaming, distance-based LOD, and editor tooling that removes programmer bottlenecks from combat design iteration.",
    tags: [
      "Unity",
      "Turn-based combat",
      "Tactical AI",
      "Addressables",
      "ScriptableObjects",
      "Editor tooling",
      "LOD",
    ],
    projects: [
      { name: "Chimera", image: "/images/projects/chimera.png" },
      {
        name: "SceneAddressableToolkit",
        image: "/images/toolkits/scene-addressable-toolkit.png",
        url: "https://github.com/Akotokoyo/SceneAddressableToolkit",
      },
      { name: "MapMinimapSystem", image: "/images/toolkits/map-minimap-system.png", url: "https://github.com/Akotokoyo/MapMinimapSystem" },
    ],
  },
  {
    period: "2021 – 2025",
    company: "Miniclip Italy",
    role: "Game Software Developer",
    description:
      "Shipped and maintained gameplay and UI-facing features on high-traffic live mobile titles. Delivered client–server integrations and online feature work under live constraints using an Erlang/AWS backend. Drove profiling-led improvements to frame time and stability on production Android/iOS builds, with emphasis on low/mid-tier devices.",
    tags: [
      "Unity",
      "C#",
      "Live ops",
      "Client–server",
      "Erlang/AWS",
      "Mobile profiling",
      "uGUI",
    ],
    projects: [
      {
        name: "Basketball Stars",
        image: "/images/projects/basketball-stars.png",
        url: "https://play.google.com/store/apps/details?id=com.miniclip.basketballstars",
      },
      {
        name: "Cricket League",
        image: "/images/projects/cricket-league.png",
        url: "https://play.google.com/store/apps/details?id=com.miniclip.cricketleague",
      },
    ],
  },
  {
    period: "2019 – 2021",
    company: "Mesa Consulting",
    role: "Full Stack Developer",
    description:
      "Backend development in C#, frontend with AngularJS, database architecture with Liquibase, and technical documentation on Microsoft Azure systems.",
    tags: ["C#", ".NET", "AngularJS", "Liquibase", "Azure"],
    projects: [],
  },
  {
    period: "2018 – 2019",
    company: "Movendo Technology",
    role: "Software Engineer",
    description:
      "Backend for the Hunova rehabilitation application (Python, SQLAlchemy, Marshmallow). Frontend with Angular, HTML, and TypeScript. Interactive videogames and QML pages for the Hunova robotic device, plus shell tools for automated testing.",
    tags: ["Python", "Angular", "TypeScript", "QML", "JavaScript", "SQLAlchemy"],
    projects: [{ name: "Hunova", image: "/images/projects/hunova.png" }],
  },
  {
    period: "2018 – 2019",
    company: "Independent",
    role: "Game Developer (published titles)",
    description:
      "End-to-end gameplay, UI, and optimisation for low-end Android devices. Solo and small-team ownership from concept to Google Play release.",
    tags: ["Unity", "Android", "2D games", "Solo development"],
    projects: [
      {
        name: "Platoon",
        image: "/images/projects/platoon.png",
        url: "https://play.google.com/store/apps/details?id=it.PraiseTheSoftware.Platoon",
      },
      {
        name: "15-o-matic",
        image: "/images/projects/15-o-matic.png",
        url: "https://play.google.com/store/apps/details?id=it.PraiseTheSoftware.fifteenomatic",
      },
    ],
  },
  {
    period: "2018",
    company: "University of Genoa",
    role: "B.Sc. Computer Engineering",
    description:
      "Graduated with a foundation in software engineering, algorithms, and systems — later applied across game development, full-stack work, and production Unity titles.",
    tags: ["Computer Engineering", "Algorithms", "Software systems"],
    projects: [],
  },
];

export const toolkits = [
  {
    name: "SceneAddressableToolkit",
    description:
      "Unity editor + runtime toolkit for open-world pipelines. Bake scenes into data-driven ZoneConfig assets, restore them in-editor with Undo support, then stream zones at runtime with prioritized chunk loading and distance-based culling.",
    url: "https://github.com/Akotokoyo/SceneAddressableToolkit",
    image: "/images/toolkits/scene-addressable-toolkit.png",
    tags: ["Addressables", "ScriptableObjects", "Open world", "Editor tooling", "LOD", "C#"],
    featured: true,
  },
  {
    name: "Map & Minimap System",
    description:
      "High-performance map and minimap system for Unity with square and rectangular map support, POI markers, zoom/pan controls, and ScriptableObject-based configuration — optimized for minimal allocations and smooth runtime updates.",
    url: "https://github.com/Akotokoyo/MapMinimapSystem",
    image: "/images/toolkits/map-minimap-system.png",
    tags: ["Minimap", "UI", "POI system", "Input System", "Performance", "C#"],
  },
];

export const blogPosts = [
  {
    category: "Architecture",
    readTime: "11 min",
    title: "Designing Deterministic Gameplay Systems in Unity",
    excerpt:
      "How to structure combat, abilities, and progression so gameplay stays predictable, testable, and reusable across projects.",
    slug: "deterministic-gameplay-systems",
  },
  {
    category: "LiveOps",
    readTime: "13 min",
    title: "Addressables, Remote Content, and Live Game Updates",
    excerpt:
      "Using Addressables for scalable content loading, memory control, remote catalogs, and safer update workflows.",
    slug: "addressables-remote-content",
  },
  {
    category: "Performance",
    readTime: "12 min",
    title: "Profiling Unity for Mobile Low/Mid-Tier Devices",
    excerpt:
      "Production notes on frame time, memory, and stability improvements for live Android/iOS builds at scale.",
    slug: "mobile-profiling-production",
  },
];

export const services = [
  {
    number: "01",
    title: "Unity Game Development",
    description:
      "Build a complete Unity game, prototype, MVP, or vertical slice from an idea, reference, or design document.",
    bestFor: "Indie teams, startups, publishers needing fast prototypes",
    pricing: "Fixed budget, hourly, or milestone-based",
    tags: ["Prototype", "MVP", "Vertical slice", "Mobile", "PC/Console"],
    featured: true,
  },
  {
    number: "02",
    title: "Gameplay Systems",
    description:
      "Design and implement scalable gameplay systems — combat, AI, abilities, progression — connected to UI and data.",
    bestFor: "Teams that need new gameplay features or cleaner systems",
    pricing: "Hourly or fixed budget per system",
    tags: ["Combat", "AI", "Abilities", "Progression", "Game feel"],
  },
  {
    number: "03",
    title: "Unity Editor Tools & Pipelines",
    description:
      "Custom inspectors, editor windows, and content pipelines that help designers iterate without engineering bottlenecks.",
    bestFor: "Content-heavy games and teams with designer-driven workflows",
    pricing: "Fixed budget or milestone pricing",
    tags: ["Editor scripting", "ScriptableObjects", "Addressables", "Tooling"],
  },
  {
    number: "04",
    title: "Performance & Project Rescue",
    description:
      "Profiling-led fixes for frame time, memory, and stability — or stabilizing projects with bugs, SDK issues, or hard-to-maintain code.",
    bestFor: "Live titles, pre-release builds, and legacy Unity projects",
    pricing: "Hourly or retainer, often starting with a technical audit",
    tags: ["Profiling", "Mobile optimisation", "Refactor", "SDK updates"],
  },
];

export const comingSoonProjects = [
  {
    name: "Horror Memory",
    status: "Coming soon",
    description:
      "A horror spot-the-difference game with story-driven levels and procedural generation. Two panels side by side: the original scene on the right, and a distorted version on the left that grows more unsettling the longer differences stay hidden.",
    image: "/images/projects/horror-memory.png",
    url: "https://github.com/Akotokoyo/HorrorMemory",
    tags: ["Unity", "Horror", "Procedural levels", "Spot the difference", "In development"],
  },
];

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#toolkits", label: "Toolkits" },
  { href: "/#coming-soon", label: "Coming Soon" },
  { href: "/#blog", label: "Blog" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];
