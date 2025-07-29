import {RiNextjsFill, RiNodejsFill, RiReactjsFill} from "react-icons/ri";
import {SiDocker, SiJavascript, SiMysql, SiShadcnui, SiTailwindcss, SiTypescript} from "react-icons/si";
import React, {ReactNode} from "react";

export type Skill = {
    title: string;
    icon: ReactNode;
};

export const SKILLS = {
    next: {
        title: "Next.js",
        icon: <RiNextjsFill/>,
    },
    node: {
        title: "Node.js",
        icon: <RiNodejsFill/>,
    },
    mysql: {
        title: "MySQL",
        icon: <SiMysql/>,
    },
    shadcn: {
        title: "ShanCN UI",
        icon: <SiShadcnui/>,
    },
    tailwind: {
        title: "Tailwind",
        icon: <SiTailwindcss/>,
    },
    docker: {
        title: "Docker",
        icon: <SiDocker/>,
    },
    js: {
        title: "JavaScript",
        icon: <SiJavascript/>,
    },
    ts: {
        title: "TypeScript",
        icon: <SiTypescript/>,
    },
    react: {
        title: "React.js",
        icon: <RiReactjsFill/>,
    },
};
