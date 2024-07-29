export enum CATEGORY_SKILLS {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "DataBase",
  DESIGN = "Design",
  PROGRAMMS = "Programms",
  FREAMWORK = "Freamwork",
  LIBARY = "Library",
  DEVOPS = "Devops",
}

export enum LEVEL_SKILL {
  BAD = "Bad",
  NORAML = "Normal",
  GOOD = "Good",
}

export interface IPropsSkill {
  id: number;
  name: string;
  category: CATEGORY_SKILLS | CATEGORY_SKILLS[];
  level: LEVEL_SKILL | LEVEL_SKILL[];
}

const SKILL: IPropsSkill[] = [
  {
    id: 1,
    name: "JavaScript",
    category: CATEGORY_SKILLS.FRONTEND,
    level: LEVEL_SKILL.NORAML,
  },
  {
    id: 2,
    name: "TypeScript",
    category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.BACKEND],
    level: LEVEL_SKILL.NORAML,
  },
  {
    id: 3,
    name: "PHP",
    category: CATEGORY_SKILLS.BACKEND,
    level: LEVEL_SKILL.NORAML,
  },
  {
    id: 4,
    name: "MySQL",
    category: CATEGORY_SKILLS.DATABASE,
    level: LEVEL_SKILL.NORAML,
  },
  {
    id: 5,
    name: "HTML",
    category: CATEGORY_SKILLS.FRONTEND,
    level: LEVEL_SKILL.GOOD,
  },
  {
    id: 6,
    name: "CSS",
    category: CATEGORY_SKILLS.FRONTEND,
    level: LEVEL_SKILL.GOOD,
  },
  {
    id: 7,
    name: "React",
    category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.LIBARY],
    level: LEVEL_SKILL.NORAML,
  },
  {
    id: 8,
    name: "Redux",
    category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.LIBARY],
    level: LEVEL_SKILL.BAD,
  },
  {
    id: 9,
    name: "NodeJS",
    category: [CATEGORY_SKILLS.BACKEND, CATEGORY_SKILLS.LIBARY],
    level: LEVEL_SKILL.NORAML,
  },
  {
    id: 10,
    name: "Express",
    category: [CATEGORY_SKILLS.BACKEND, CATEGORY_SKILLS.LIBARY],
    level: LEVEL_SKILL.NORAML,
  },
  {
    id: 11,
    name: "MongoDB",
    category: CATEGORY_SKILLS.DATABASE,
    level: LEVEL_SKILL.BAD,
  },
  {
    id: 12,
    name: "WordPress",
    category: [CATEGORY_SKILLS.BACKEND, CATEGORY_SKILLS.FREAMWORK],
    level: LEVEL_SKILL.GOOD,
  },
  {
    id: 13,
    name: "Docker",
    category: [CATEGORY_SKILLS.DEVOPS, CATEGORY_SKILLS.PROGRAMMS],
    level: LEVEL_SKILL.NORAML,
  },
  {
    id: 14,
    name: "Git",
    category: CATEGORY_SKILLS.DEVOPS,
    level: LEVEL_SKILL.NORAML,
  },
  {
    id: 15,
    name: "Email adaptive",
    category: CATEGORY_SKILLS.FRONTEND,
    level: LEVEL_SKILL.GOOD,
  },
  {
    id: 16,
    name: "SEO",
    category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.BACKEND],
    level: LEVEL_SKILL.NORAML,
  },
];

export { SKILL };
