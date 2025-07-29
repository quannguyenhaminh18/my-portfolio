import {cn} from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {SiGithub, SiLinkedin} from "react-icons/si";
import {File} from "lucide-react";
import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";
import {general} from "@/constants/general";
import SkillBoard from "@/components/SkillBoard";

const HeroSection = () => {
    const t = useTranslations();

    return (
        <section id="hero" className={cn("relative w-full h-screen")}>
            <div className="grid md:grid-cols-2">
                <div
                    className={cn(
                        "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
                        "col-span-1",
                        "flex flex-col justify-start md:justify-center items-center md:items-start",
                        "pt-28 sm:pt-0 sm:pb-32 md:p-24 lg:p-40 xl:p-48"
                    )}
                >
                    <>
                        <div className="">
                            <h1
                                className={cn(
                                    "font-thin text-6xl text-transparent ml-1 text-left",
                                    "cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl "
                                )}
                            >
                                {t('me.fullName')}
                                <br className="md:block hiidden"/>
                            </h1>
                            <p
                                className={cn(
                                    "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                                    "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                                )}
                            >
                                {t('hero.description')}
                            </p>
                        </div>
                        <div className="mt-8 md:ml-2 flex flex-col gap-3">
                            <Link
                                href={
                                    "https://drive.google.com/file/d/1O97WCk2DrO9x6SHOqf7LvRbmHkMgGIb4/view?usp=sharing"
                                }
                                target="_blank"
                                className="flex-1"
                            >
                                <File size={24}/>
                                <p>Resume</p>
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
                                    href={general.github}
                                    target="_blank"
                                >
                                    <Button variant={"outline"}>
                                        <SiGithub size={24}/>
                                    </Button>
                                </Link>
                                <Link
                                    href={general.linkedin}
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
                <div className="grid col-span-1"></div>
            </div>
            <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
            </div>
            <SkillBoard/>
        </section>
    );
};

export default HeroSection;
