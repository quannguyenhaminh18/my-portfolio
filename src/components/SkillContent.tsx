import React from "react";

export function SkillContent({
                                 title,
                                 icon,
                                 bgColor,
                             }: {
    title: string;
    icon: React.ReactNode;
    bgColor: string;
}) {
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <div className="text-xs text-center text-neutral-700 dark:text-white">
                {title}
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800">
                {icon}
            </div>
        </div>
    );
}
