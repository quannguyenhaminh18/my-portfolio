import {Skill, SKILLS} from "@/constants/skills";

export type ProjectProps = {
    id: number;
    title: string;
    description: string;
    category: string;
    backgroundImage: string;
    screenshots: string[];
    skills: { frontend: Skill[]; backend: Skill[] };
    github: string;
    live: string;
};

export const PROJECTS: ProjectProps[] = [
    {
        id: 1,
        category: "Something",
        title: "Something",
        description: "Something",
        backgroundImage: "",
        screenshots: ["", ""],
        skills: {
            frontend: [
                SKILLS.ts,
                SKILLS.next,
            ],
            backend: [
                SKILLS.node,
                SKILLS.mysql
            ],
        },
        live: "https://",
        github: "https://github.com",
    },
];

