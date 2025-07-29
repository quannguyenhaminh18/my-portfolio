"use client";
import React from "react";
import { SKILLS } from "@/constants/skills";

const SkillBoard = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([key, skill]) => (
                <div
                    key={key}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg shadow bg-white dark:bg-zinc-900"
                >
                    <div
                        className={`text-4xl text-white p-2 rounded-full ${skill.bgColor}`}
                    >
                        {skill.icon}
                    </div>
                    <span className="text-center text-sm font-medium text-zinc-700 dark:text-zinc-100">
            {skill.title}
          </span>
                </div>
            ))}
        </div>
    );
};

export default SkillBoard;
