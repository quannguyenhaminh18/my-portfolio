import React from "react";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-center w-full gap-4 border-t border-border px-4 py-6 md:px-6 sm:flex-row sm:justify-between">
            {/* Bản quyền */}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
                © {year} {config.author}. All rights reserved.
            </p>

            {/* Nút mạng xã hội */}
            <div className="flex gap-3">
                <SocialMediaButtons />
            </div>
        </footer>
    );
}

export default Footer;
