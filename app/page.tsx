'use client'
import React from "react";
import Hero from "@/components/Home/Hero";
import RetroGrid from "@/components/ui/retro-grid";

export default function Home() {
  return (
    <>
      <RetroGrid />
      <div className="relative  container md:px-0 px-4 ">
        <Hero />
      </div>
    </>
  );
}
