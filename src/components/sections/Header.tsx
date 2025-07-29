"use client";

import React from "react";
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import LanguageSwitcher from "@/components/LanguageSwitcher";

const LINKS = [
    { key: "me.sortName", href: "/" },
    { key: "header.project", href: "#projects" },
    { key: "header.contact", href: "#contact" },
    { key: "header.about", href: "#about" },
    { key: "header.blog", href: "#blog" },
];

const Header = () => {
    const t = useTranslations();
    const activeRoute = usePathname();

    return (
        <div className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md px-4">
            <div className="max-w-screen-xl mx-auto h-[60px] flex items-center justify-between">
                {/* Navigation Links */}
                <nav className="flex items-center gap-6">
                    {LINKS.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={`text-2xl text-zinc-500 hover:text-zinc-300 transition-colors ${
                                activeRoute === link.href ? "text-zinc-200" : ""
                            }`}
                        >
                            {t(link.key)}
                        </Link>
                    ))}
                </nav>
                <div>
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
    );
};

export default Header;
