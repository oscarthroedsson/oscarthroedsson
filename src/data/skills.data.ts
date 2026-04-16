import type { SVGAnimations } from "../components/SVGIcon";

export const SKILLS_SVGS = import.meta.glob("/src/assets/Skills/Icons/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

interface Skill {
  label: string;
  category: "Languages" | "Frontend" | "Backend" | "AI & ML" | "Testing" | "Tooling";
  svg: string;
  animation: SVGAnimations;
  projects: string[];
}

const svgPath = "/src/assets/Skills/Icons/icon";

export const SKILLS: Skill[] = [
  // ─── Languages ───────────────────────────────────────────
  {
    label: "CSS",
    category: "Languages",
    svg: SKILLS_SVGS[`${svgPath}-css.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "CSharp",
    category: "Languages",
    svg: SKILLS_SVGS[`${svgPath}-csharp.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "HTML",
    category: "Languages",
    svg: SKILLS_SVGS[`${svgPath}-html.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "JavaScript",
    category: "Languages",
    svg: SKILLS_SVGS[`${svgPath}-js.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Sass",
    category: "Languages",
    svg: SKILLS_SVGS[`${svgPath}-sass.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "TypeScript",
    category: "Languages",
    svg: SKILLS_SVGS[`${svgPath}-ts.svg`],
    animation: {},
    projects: [],
  },

  // ─── Frontend ─────────────────────────────────────────────
  {
    label: "Framer Motion",
    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-framer.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "NextJS",
    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-nextjs.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "React",
    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-react.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "React Query",

    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-reactQuery.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "React Router",
    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-reactRouter.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Redux",
    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-redux.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Shad-CN",
    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-shadCN.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Tailwind",
    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-tailwind.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "TankStack",
    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-tankstack.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Vue",
    category: "Frontend",
    svg: SKILLS_SVGS[`${svgPath}-vue.svg`], // ← du hade VSCode.svg här, fixat
    animation: {},
    projects: [],
  },

  // ─── Backend ──────────────────────────────────────────────
  {
    label: "Firebase",
    category: "Backend",
    svg: SKILLS_SVGS[`${svgPath}-firebase.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "MongoDB",
    category: "Backend",
    svg: SKILLS_SVGS[`${svgPath}-mongoDB.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Node",
    category: "Backend",
    svg: SKILLS_SVGS[`${svgPath}-node.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Nodemon",
    category: "Backend",
    svg: SKILLS_SVGS[`${svgPath}-nodemon.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Prisma ORM",
    category: "Backend",
    svg: SKILLS_SVGS[`${svgPath}-prisma.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Redis",
    category: "Backend",
    svg: SKILLS_SVGS[`${svgPath}-redis.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Stripe",
    category: "Backend",
    svg: SKILLS_SVGS[`${svgPath}-stripe.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Supabase",
    category: "Backend",
    svg: SKILLS_SVGS[`${svgPath}-supabase.svg`],
    animation: {},
    projects: [],
  },

  // ─── AI & ML ──────────────────────────────────────────────
  {
    label: "Claude API",
    category: "AI & ML",
    svg: SKILLS_SVGS[`${svgPath}-claude.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Gemini",
    category: "AI & ML",
    svg: SKILLS_SVGS[`${svgPath}-gemenai.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Lang Chain",
    category: "AI & ML",
    svg: SKILLS_SVGS[`${svgPath}-langChain.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Open AI API",
    category: "AI & ML",
    svg: SKILLS_SVGS[`${svgPath}-openAI.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Qdrant",
    category: "AI & ML",
    svg: SKILLS_SVGS[`${svgPath}-qdrant.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Vercel AI SDK",
    category: "AI & ML",
    svg: SKILLS_SVGS[`${svgPath}-vercelaisdk.svg`],
    animation: {},
    projects: [],
  },

  // ─── Testing ──────────────────────────────────────────────
  {
    label: "Cypress",
    category: "Testing",
    svg: SKILLS_SVGS[`${svgPath}-cypress.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Jest",
    category: "Testing",
    svg: SKILLS_SVGS[`${svgPath}-jest.svg`],
    animation: {},
    projects: [],
  },

  // ─── Tooling ──────────────────────────────────────────────
  {
    label: "Cursor",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-cursor.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Docker",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-docker.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "ESLint",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-eslint.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Expo",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-expo.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Figma",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-figma.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Git",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-git.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Github",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-github.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Google Cloud",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-googleCloud.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Npm",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-npm.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Pnpm",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-pnpm.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Prettier",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-prettier.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Vite",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-vite.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "VSCode",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-vscode.svg`],
    animation: {},
    projects: [],
  },
  {
    label: "Zod",
    category: "Tooling",
    svg: SKILLS_SVGS[`${svgPath}-zod.svg`],
    animation: {},
    projects: [],
  },
];
