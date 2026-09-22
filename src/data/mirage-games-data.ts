export type GameStatus = "In Development" | "Released";

export type Game = {
  slug: string;
  name: string;
  status: GameStatus;
  tagline: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  gallery?: { name: string; image: string }[];
  platforms: string[];
  genres: string[];
  storeUrl?: string;
  featured?: boolean;
  team?: string;
};

export const studioConfig = {
  name: "Mirage Games",
  tagline: "Dream. Create. Play",
  logo: "/images/mirage-games-logo.png",
  description:
    "Mirage Games is an independent studio based in Italy. We build games that blend strong atmosphere with thoughtful mechanics - from light-horror puzzles to tactical RPGs. Currently a team of five developers, growing one project at a time.",
  location: "Italy",
  teamSize: 5,
  email: "giorgiatedde@hotmail.com",
  contactEmail: "mirage.games.it@gmail.com",
  founded: "2026",
  instagram: "https://www.instagram.com/mirage_games_it/",
  facebook:
    "https://www.facebook.com/profile.php?id=61594435921969&locale=it_IT",
};

export const studioSocialLinks = [
  { label: "Instagram", href: studioConfig.instagram },
  { label: "Facebook", href: studioConfig.facebook },
] as const;

export const studioStats = [
  { label: "Team members", value: "5" },
  { label: "Games in development", value: "1" },
  { label: "Titles released", value: "3" },
];

export const games: Game[] = [
  {
    slug: "chimera",
    name: "Chimera",
    status: "In Development",
    tagline: "A turn-based RPG where every decision shapes the battlefield.",
    description:
      "Chimera is a tactical turn-based RPG built for PC and console. Combat, ability systems, and enemy AI are designed for depth and replayability. The team is building a designer-facing level pipeline with Addressables streaming and editor tooling that keeps iteration fast.",
    image: "/images/projects/chimera.jpg",
    platforms: ["PC", "Console"],
    genres: ["Turn-based RPG", "Tactical", "Indie"],
    featured: true,
    team: "Independent team · 5 developers",
  },
  {
    slug: "before-the-threshold",
    name: "Before The Threshold",
    status: "Released",
    tagline: "Something is wrong between past, present, and future.",
    description:
      "A light-horror spot-the-difference game on Android. Follow a girl trapped across timelines — uncover what does not add up, and find the courage to cross the threshold. Story mode, procedural levels, and polished UI built end-to-end in Unity.",
    image: "/images/projects/before-the-threshold-menu.jpg",
    gallery: [
      {
        name: "Level Selection",
        image: "/images/projects/before-the-threshold-levels.jpg",
      },
      {
        name: "Gameplay",
        image: "/images/projects/before-the-threshold-gameplay.jpg",
      },
    ],
    platforms: ["Android"],
    genres: ["Spot the difference", "Light horror", "Puzzle"],
    storeUrl:
      "https://play.google.com/store/apps/details?id=it.MirageGames.BeforeTheThreshold",
  },
  {
    slug: "platoon",
    name: "Platoon",
    status: "Released",
    tagline: "Fast-paced action on mobile.",
    description:
      "An action title published under the PraiseTheSoftware label — end-to-end gameplay, UI, and optimisation for low-end Android devices.",
    image: "/images/projects/platoon.png",
    imageFit: "contain",
    platforms: ["Android"],
    genres: ["Action", "Mobile"],
    storeUrl:
      "https://play.google.com/store/apps/details?id=it.PraiseTheSoftware.Platoon",
  },
  {
    slug: "15-o-matic",
    name: "15-o-matic",
    status: "Released",
    tagline: "Classic sliding puzzle, reimagined.",
    description:
      "A polished take on the 15-puzzle formula for Android — solo-developed from concept to Google Play release.",
    image: "/images/projects/15-o-matic.png",
    platforms: ["Android"],
    genres: ["Puzzle", "Mobile"],
    storeUrl:
      "https://play.google.com/store/apps/details?id=it.PraiseTheSoftware.fifteenomatic",
  },
];

export const studioNavLinks = [
  { href: "/#games", label: "Games" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];
