import React from "react";
import {SkillList} from "@/components/SkillList";
import {ProjectProps} from "@/constants/projects";
import SlideShow from "@/components/SlideShow";

export const ProjectContent = ({project}: { project: ProjectProps }) => {
    return (
        <>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                {project.title}
            </h4>
            <div
                className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
                <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
                    <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
                        Frontend
                    </p>
                    {project.skills.frontend?.length > 0 && (
                        <SkillList items={project.skills.frontend}/>
                    )}
                </div>
                {project.skills.backend?.length > 0 && (
                    <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
                        <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
                            Backend
                        </p>
                        <SkillList items={project.skills.backend}/>
                    </div>
                )}
            </div>
            <SlideShow images={project.screenshots}/>
        </>
    );
};