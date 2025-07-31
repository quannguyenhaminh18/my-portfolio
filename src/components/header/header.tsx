"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { config } from "@/data/config";

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
      <motion.header
          className={cn(
              "fixed w-full z-[9] box-border p-4 sm:p-5 backdrop-blur-lg transition-colors duration-500 ease-in",
              isActive ? "bg-background/80" : "bg-transparent"
          )}
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{
            delay: loader ? 3.5 : 0,
            duration: 0.8,
          }}
      >
        <div className="relative flex items-center justify-between lowercase text-[12px] sm:text-[15px] font-normal">
          {/* Left: Author */}
          <Link href="/" className="absolute left-0">
            <Button variant="link" className="text-md">
              {config.author}
            </Button>
          </Link>

          {/* Right: Toggle Button */}
          <div className="absolute right-0 flex gap-8">
            <div className="hidden sm:block cursor-pointer">Shop</div>

            <Button
                variant="ghost"
                onClick={() => setIsActive(!isActive)}
                className="m-0 p-0 h-6 bg-transparent flex items-center justify-center gap-3 cursor-pointer"
            >
              <div className="relative flex items-center">
                <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>
                  Menu
                </motion.p>
                <motion.p
                    variants={opacity}
                    animate={isActive ? "open" : "closed"}
                    className="absolute opacity-0"
                >
                  Close
                </motion.p>
              </div>

              {/* Burger Icon */}
              <div className="relative w-[22.5px] pointer-events-none">
              <span
                  className={cn(
                      "block h-px w-full bg-foreground transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] relative",
                      isActive ? "rotate-45 top-[-1px]" : "top-[-4px]"
                  )}
              />
                <span
                    className={cn(
                        "block h-px w-full bg-foreground transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] relative",
                        isActive ? "-rotate-45 top-[1px]" : "top-[4px]"
                    )}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Background Overlay Animation */}
        <motion.div
            variants={background}
            initial="initial"
            animate={isActive ? "open" : "closed"}
            className="absolute left-0 top-full w-full h-full bg-[hsl(240,10%,3.9%)] opacity-50"
        ></motion.div>

        {/* Mobile Nav (conditionally rendered) */}
        <AnimatePresence mode="wait">
          {isActive && <Nav setIsActive={setIsActive} />}
        </AnimatePresence>
      </motion.header>
  );
};

export default Header;
