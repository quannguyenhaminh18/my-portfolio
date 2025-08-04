import type {Metadata} from "next";
import {Archivo_Black} from "next/font/google";
import "./globals.css";
import Particles from "@/components/Particles";
import {ThemeProvider} from "next-themes";
import Header from "@/components/header/header";
import {Toaster} from "sonner";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import {config} from "@/data/config";
import React from "react";

export const metadata: Metadata = {
    title: config.title,
    description: config.description.long,
    keywords: config.keywords,
    authors: [{name: config.author}],
    openGraph: {
        title: config.title,
        description: config.description.short,
        url: config.site,
        images: [
            {
                url: config.ogImg,
                width: 800,
                height: 600,
                alt: "Portfolio preview",
            },
        ],
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const archivoBlack = Archivo_Black({
    subsets: ["latin"],
    weight: "400",
});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className={[archivoBlack.className].join(" ")} suppressHydrationWarning>
        <head>
            <Script
                defer
                src={process.env.UMAMI_DOMAIN}
                data-website-id={process.env.UMAMI_SITE_ID}
            ></Script><title></title>
        </head>
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
        >
            <Particles
                className="fixed inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <Header/>
            {children}
            <Footer/>
            <Toaster position="top-center" richColors/>
        </ThemeProvider>
        </body>
        </html>
    );
}
