"use client";

import React from "react";
import {SiGithub, SiLinkedin, SiFacebook} from "react-icons/si";
import {general} from "@/constants/general";
import Link from "next/link";
import {Button} from "@/components/ui/button";

const BUTTONS = [
    {
        name: "Github",
        href: general.github,
        icon: <SiGithub size={"24"} color={"#fff"}/>,
    },
    {
        name: "LinkedIn",
        href: general.linkedin,
        icon: <SiLinkedin size={"24"} color={"#fff"}/>,
    },
    {
        name: "Facebook",
        href: general.facebook,
        icon: <SiFacebook size={"24"} color={"#fff"}/>,
    },
];

const SocialMedia = () => {
    return (
        <div className="z-10">
            {
                BUTTONS.map((button) => (
                    <Link href={button.href} key={button.name} target="_blank">
                        <Button variant={"ghost"}>{button.icon}</Button>
                    </Link>
                ))
            }
        </div>
    );
};

export default SocialMedia;
