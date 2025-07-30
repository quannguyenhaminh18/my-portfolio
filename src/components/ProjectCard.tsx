import Image from "next/image";
import React from "react";
import {Modal, ModalBody, ModalContent, ModalTrigger} from "@/components/Modal";
import {ProjectContent} from "@/components/ProjectContent";
import {ProjectProps} from "@/constants/projects";

export const ProjectCard = ({project}: { project: ProjectProps }) => {
    return (
        <div className="flex items-center justify-center">
            <Modal>
                <ModalTrigger className="bg-transparent flex justify-center group/modal-btn">
                    <div
                        className="relative w-[400px] h-auto rounded-lg overflow-hidden"
                        style={{aspectRatio: "3/2"}}
                    >
                        <Image
                            className="absolute w-full h-full top-0 left-0 hover:scale-[1.05] transition-all"
                            src={project.backgroundImage}
                            alt={project.title}
                            width={300}
                            height={300}
                        />
                        <div
                            className="absolute w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none">
                            <div className="flex flex-col h-full items-start justify-end p-6">
                                <div className="text-lg text-left">{project.title}</div>
                                <div className="text-xs bg-white text-black rounded-lg w-fit px-2">
                                    {project.category}
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalTrigger>
                <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
                    <ModalContent>
                        <ProjectContent project={project}/>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </div>
    );
};