'use client'
import React from "react";
import RetroGrid from "@/components/ui/retro-grid";
import { AllBlocks } from "@/components/allBlocks/AllBlocks";
import Hero from "@/components/home/Hero";
import AllBlocksData from '@/data/blocks.json'

export default function Home() {
  return (
    <main>
      <section className=" relative">
        <RetroGrid />
        <Hero />
        <div className="opacity-layer"></div>
      </section>
      <AllBlocks AllBlocksData={AllBlocksData} className={'grid grid-cols-1 md:grid-cols-2 gap-8'} comp={'New Components'} more={'more'} />
    </main>
  );
}
