"use client";

import React from "react";
import {cn} from "@/lib/utils";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

function MainPage() {
    return (
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
            <HeroSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
    );
}

export default MainPage;
