"use client";
import React from "react";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";

const ContactSection = () => {
    return (
        <section id="contact" className="min-h-screen max-w-7xl mx-auto">
            <Link href={"#contact"}>
                <h2
                    className={cn(
                        "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
                        "bg-gradient-to-b from-black/80 to-black/50",
                        "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
                    )}
                >
                    LET&apos;S WORK <br />
                    TOGETHER
                </h2>
            </Link>

            <div className="min-w-7xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-10 md:mt-20 shadow-sm text-card-foreground border">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-4xl font-semibold leading-none tracking-tight">
                        Contact Form
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Please contact me directly at{" "}
                        <a
                            target="_blank"
                            href={`mailto:${config.email}`}
                            className="text-gray-200 cursor-can-hover rounded-lg"
                        >
                            {config.email}
                        </a>{" "}
                        or drop your info here.
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
