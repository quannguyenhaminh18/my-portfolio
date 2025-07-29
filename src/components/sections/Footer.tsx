"use client";

import React from "react";
import SocialMedia from "@/components/SocialMedia";
import {useTranslations} from "next-intl";

function Footer() {
    const t = useTranslations();
    const year = new Date().getFullYear();
    return (
        <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6 sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
                © {year} {t("me.fullName")}. {t('copyright')}
            </p>
            <SocialMedia />
        </footer>
    );
}

export default Footer;
