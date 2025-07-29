"use client";

// import HeroSection from "@/components/HeroSection";
// import ContactSection from "@/components/ContactSection";
// import ProjectSection from "@/components/ProjectSection";
// import Footer from "@/components/Footer";
import React from "react";
import Header from "@/components/sections/Header";

export default function HomePage() {
  return (
      <div
          className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Header/>
          {/*<HeroSection/>*/}
          {/*<ProjectSection/>*/}
          {/*<ContactSection/>*/}
          {/*<Footer/>*/}
        </main>
      </div>
  );
}
