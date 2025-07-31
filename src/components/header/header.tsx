"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import {links} from "@/components/header/config";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  return (
      <motion.header
          className={cn(
              "fixed w-full z-[9] box-border p-4 sm:p-5 backdrop-blur-lg transition-colors duration-500 ease-in bg-background/80"
          )}
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{
            delay: loader ? 3.5 : 0,
            duration: 0.8,
          }}
      >
        <div className="relative flex items-center justify-between text-[12px] sm:text-[15px] font-normal lowercase">
          {/* Left: Author */}
          <Link href="/" className="flex-shrink-0">
            <Button variant="link" className="text-md px-2">
              {config.author}
            </Button>
          </Link>

          {/* Center: Links */}
          <div className="flex gap-4 sm:gap-6 justify-center items-center mx-auto">
            {links.map((link, index) => (
                <Link key={index} href={link.href}>
                  <Button variant="link" className="text-md px-2">
                    {link.title}
                  </Button>
                </Link>
            ))}
          </div>

          {/* Right: Empty or future actions (e.g., theme toggle, profile, etc.) */}
          <div className="w-[80px] sm:w-[100px]" /> {/* Placeholder to balance layout */}
        </div>
      </motion.header>
  );
};

export default Header;
