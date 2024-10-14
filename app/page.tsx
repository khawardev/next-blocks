'use client'
import React from "react";
import Hero from "@/components/Home/hero/Hero";
import RetroGrid from "@/components/ui/retro-grid";
import { AllBlocks } from "@/components/all-blocks/All-Blocks";

export default function Home() {
  return (
    <main>
      <section className=" relative">
        <RetroGrid />
        <Hero />
        <div className="opacity-layer"></div>
      </section>
      <section>
        <AllBlocks className={'grid grid-cols-1 md:grid-cols-2 gap-8'} comp={'New Components'} more={'more'} />
      </section>
    </main>
  );
}
