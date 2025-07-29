import {RiNextjsFill, RiNodejsFill, RiReactjsFill} from "react-icons/ri";
import {SiDocker, SiJavascript, SiMysql, SiShadcnui, SiTailwindcss, SiTypescript} from "react-icons/si";
import React, {ReactNode} from "react";

export type Skill = {
    title: string;
    icon: ReactNode;
    bgColor: string;
};

export const SKILLS = {
    next: {
        title: "Next.js",
        icon: <RiNextjsFill />,
        bgColor: "bg-black",
    },
    node: {
        title: "Node.js",
        icon: <RiNodejsFill />,
        bgColor: "bg-green-600",
    },
    mysql: {
        title: "MySQL",
        icon: <SiMysql />,
        bgColor: "bg-[#00758F]",
    },
    shadcn: {
        title: "ShadCN UI",
        icon: <SiShadcnui />,
        bgColor: "bg-zinc-700",
    },
    tailwind: {
        title: "Tailwind",
        icon: <SiTailwindcss />,
        bgColor: "bg-cyan-400",
    },
    docker: {
        title: "Docker",
        icon: <SiDocker />,
        bgColor: "bg-blue-500",
    },
    js: {
        title: "JavaScript",
        icon: <SiJavascript />,
        bgColor: "bg-yellow-300",
    },
    ts: {
        title: "TypeScript",
        icon: <SiTypescript />,
        bgColor: "bg-blue-600",
    },
    react: {
        title: "React.js",
        icon: <RiReactjsFill />,
        bgColor: "bg-cyan-300",
    },
};

