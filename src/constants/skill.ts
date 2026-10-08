export enum CATEGORY_SKILLS {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend',
    DATABASE = 'DataBase',
    DESIGN = 'Design',
    PROGRAMMS = 'Programms',
    FREAMWORK = 'Freamwork',
    LIBARY = 'Library',
    DEVOPS = 'Devops',
}

export enum TAG_SKILLS {
    SSR = 'SSR',
    SSG = 'SSG',
    CSR = 'CSR',
    REACT = 'REACT',
    JSNATIVE = 'JS native'
}

export interface IPropsSkill {
    id: number
    name: string
    category: CATEGORY_SKILLS | CATEGORY_SKILLS[]
    tag?: TAG_SKILLS | TAG_SKILLS[]
}

export const SKILL: IPropsSkill[] = [
    {
        id: 1,
        name: 'JavaScript',
        category: CATEGORY_SKILLS.FRONTEND,
    },
    {
        id: 2,
        name: 'TypeScript',
        category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.BACKEND],
    },
    {
        id: 3,
        name: 'PHP',
        category: CATEGORY_SKILLS.BACKEND,
    },
    {
        id: 4,
        name: 'MySQL',
        category: CATEGORY_SKILLS.DATABASE,
    },
    {
        id: 5,
        name: 'HTML',
        category: CATEGORY_SKILLS.FRONTEND,
    },
    {
        id: 6,
        name: 'CSS',
        category: CATEGORY_SKILLS.FRONTEND,
    },
    {
        id: 7,
        name: 'React',
        category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.LIBARY],
    },
    {
        id: 8,
        name: 'Redux',
        category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.LIBARY],
    },
    {
        id: 9,
        name: 'NodeJS',
        category: [CATEGORY_SKILLS.BACKEND, CATEGORY_SKILLS.LIBARY],
    },
    {
        id: 10,
        name: 'Express',
        category: [CATEGORY_SKILLS.BACKEND, CATEGORY_SKILLS.LIBARY],
    },
    {
        id: 11,
        name: 'MongoDB',
        category: CATEGORY_SKILLS.DATABASE,
    },
    {
        id: 12,
        name: 'WordPress',
        category: [CATEGORY_SKILLS.BACKEND, CATEGORY_SKILLS.FREAMWORK],
    },
    {
        id: 13,
        name: 'Docker/Docker compose',
        category: [CATEGORY_SKILLS.DEVOPS, CATEGORY_SKILLS.PROGRAMMS],
    },
    {
        id: 14,
        name: 'Git',
        category: CATEGORY_SKILLS.DEVOPS,
    },
    {
        id: 15,
        name: 'Email adaptive',
        category: CATEGORY_SKILLS.FRONTEND,
    },
    {
        id: 16,
        name: 'SEO',
        category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.BACKEND],
    },
    {
        id: 17,
        name: 'NextJS',
        category: [
            CATEGORY_SKILLS.FRONTEND,
            CATEGORY_SKILLS.BACKEND,
            CATEGORY_SKILLS.FREAMWORK,
        ],
        tag: [
            TAG_SKILLS.CSR,
            TAG_SKILLS.SSR,
            TAG_SKILLS.SSG
        ]
    },
    {
        id: 18,
        name: 'Svelte',
        category: [
            CATEGORY_SKILLS.FRONTEND,
            CATEGORY_SKILLS.BACKEND,
            CATEGORY_SKILLS.FREAMWORK,
        ],
    },
    {
        id: 19,
        name: 'GraphQL',
        category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.LIBARY],
    },
    {
        id: 20,
        name: 'RestAPI',
        category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.LIBARY],
    },
    {
        id: 21,
        name: 'GRID adaptive',
        category: CATEGORY_SKILLS.FRONTEND,
    },
    {
        id: 22,
        name: 'FLEX adaptive',
        category: CATEGORY_SKILLS.FRONTEND,
    },
    {
        id: 23,
        name: 'Vite',
        category:  [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.LIBARY],
    },
    {
        id: 24,
        name: 'Webpack',
        category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.LIBARY],
    },
    {
        id: 25,
        name: 'JQuery',
        category: [CATEGORY_SKILLS.FRONTEND, CATEGORY_SKILLS.LIBARY],
    },
    {
        id: 26,
        name: 'Figma',
        category: CATEGORY_SKILLS.DESIGN,
    },
    {
        id: 27,
        name: 'SCSS/SASS',
        category: CATEGORY_SKILLS.FRONTEND,
    },
    {
        id: 28,
        name: 'Argo CD',
        category: CATEGORY_SKILLS.DEVOPS,
    },
    {
        id: 29,
        name: 'AI Assisted Coding',
        category: CATEGORY_SKILLS.PROGRAMMS,
    },
    {
        id: 30,
        name: 'Astro',
        category: [CATEGORY_SKILLS.FREAMWORK, CATEGORY_SKILLS.FRONTEND],
    },
    {
        id: 31,
        name: 'PWA',
        category: CATEGORY_SKILLS.FRONTEND,
    },
    {
        id: 32,
        name: 'Game dev',
        category: CATEGORY_SKILLS.FRONTEND,
        tag: [TAG_SKILLS.JSNATIVE, TAG_SKILLS.REACT]
    },
    {
        id: 33,
        name: 'TG web app/ TG bot',
        category: CATEGORY_SKILLS.FRONTEND,
        tag: [ TAG_SKILLS.REACT]
    },
    {
        id: 34,
        name: 'VK mini app',
        category: CATEGORY_SKILLS.FRONTEND,
        tag: [ TAG_SKILLS.REACT]
    },
]
