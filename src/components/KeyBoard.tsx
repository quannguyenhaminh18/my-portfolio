import React from "react";
import { PROJECT_SKILLS } from "@/data/projects";

export const KeyBoard = () => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {Object.entries(PROJECT_SKILLS).map(([key, skill]) => (
                <div
                    key={key}
                    style={{
                        position: "relative",
                        width: "64px",
                        height: "64px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "transform 0.1s",
                    }}
                    onMouseEnter={(e) => {
                        const label = e.currentTarget.querySelector(".skill-label") as HTMLElement;
                        if (label) {
                            label.style.opacity = "1";
                            label.style.transform = "translateY(0)";
                        }
                        e.currentTarget.style.transform = "scale(0.92)";
                    }}
                    onMouseLeave={(e) => {
                        const label = e.currentTarget.querySelector(".skill-label") as HTMLElement;
                        if (label) {
                            label.style.opacity = "0";
                            label.style.transform = "translateY(5px)";
                        }
                        e.currentTarget.style.transform = "scale(1)";
                    }}
                >
                    {/* Label */}
                    <div
                        className="skill-label"
                        style={{
                            position: "absolute",
                            bottom: "100%",
                            marginBottom: "0.5rem",
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            color: "#fff",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            whiteSpace: "nowrap",
                            opacity: 0,
                            transform: "translateY(5px)",
                            transition: "opacity 0.2s, transform 0.2s",
                            pointerEvents: "none",
                        }}
                    >
                        {skill.title}
                    </div>

                    {/* Icon */}
                    <img
                        src={skill.icon}
                        alt={skill.title}
                        style={{
                            width: "32px",
                            height: "32px",
                            objectFit: "contain",
                            filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.2))",
                        }}
                    />
                </div>
            ))}
        </div>
    );
};
