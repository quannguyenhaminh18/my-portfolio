"use client";
import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {ProjectCard} from "@/components/ProjectCard";
import {PROJECTS} from "@/constants/projects";

const ProjectSection = () => {
    return (
        <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
            <Link href={"#projects"}>
                <h2
                    className={cn(
                        "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
                        "bg-gradient-to-b from-black/80 to-black/50",
                        "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
                    )}
                >
                    Projects
                </h2>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {PROJECTS.map((item, index) => (
                    <ProjectCard key={index} project={item} />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;