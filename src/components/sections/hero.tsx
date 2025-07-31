import {cn} from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {Button} from "../ui/button";
import {File} from "lucide-react";
import {BlurIn, BoxReveal} from "../reveal-animations";
import {SiGithub, SiLinkedin} from "react-icons/si";
import {config} from "@/data/config";

const HeroSection = () => {
    return (
        <section id="hero" className={cn("relative w-full h-screen")}>
            <div
                className={cn(
                    "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
                    "flex flex-col justify-center items-center text-center",
                    "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
                )}
            >
                <>
                    <div className="">
                        <BlurIn delay={0.7}>
                            <p
                                className={cn(
                                    "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                                    "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                                )}
                            >
                                Hi, I am
                                <br className="md:hidden"/>
                            </p>
                        </BlurIn>
                        <BlurIn delay={1}>
                            <p
                                className={cn(
                                    "font-thin text-6xl text-transparent text-slate-800 ml-1 text-left",
                                    "cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl "
                                )}
                            >
                                {config.author.split(" ")[0]}
                                <br className="md:block hidden"/>
                                {config.author.split(" ")[1]}
                            </p>
                        </BlurIn>
                        <BlurIn delay={1.2}>
                            <p
                                className={cn(
                                    "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                                    "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                                )}
                            >
                                A Full Stack Web Developer
                            </p>
                        </BlurIn>
                    </div>
                    <div className="mt-8 md:ml-2 flex flex-col gap-3">
                        <Link
                            href={
                                "https://drive.google.com/file/d/1O97WCk2DrO9x6SHOqf7LvRbmHkMgGIb4/view?usp=sharing"
                            }
                            target="_blank"
                            className="flex-1"
                        >
                            <BoxReveal delay={2} width="100%">
                                <Button className="flex items-center gap-2 w-full">
                                    <File size={24}/>
                                    <p>Resume</p>
                                </Button>
                            </BoxReveal>
                        </Link>
                        <div className="md:self-start flex gap-3">
                            <Link href={"#contact"}>
                                <Button
                                    variant={"outline"}
                                    className="block w-full overflow-hidden"
                                >
                                    Hire Me
                                </Button>
                            </Link>
                            <Link
                                href={config.social.github}
                                target="_blank"
                            >
                                <Button variant={"outline"}>
                                    <SiGithub size={24}/>
                                </Button>
                            </Link>
                            <Link
                                href={config.social.linkedin}
                                target="_blank"
                            >
                                <Button variant={"outline"}>
                                    <SiLinkedin size={24}/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </>
            </div>
        </section>
    );
};

export default HeroSection;
