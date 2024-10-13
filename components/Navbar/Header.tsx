"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CommandMenu } from "@/components/Navbar/command-menu";
import { Icons } from "@/components/Navbar/icons";
import { DesktopNav } from "@/components/Navbar/desktop-nav";
import { MobileNav } from "@/components/Navbar/mobile-nav";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container md:px-0 px-4 flex h-14 max-w-screen-2xl items-center">
        <DesktopNav />
        <MobileNav />
        <div className="md:hidden flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center gap-2">
            <Link href={siteConfig.links.github}>
              <Button size={'icon'} variant={'ghost'}>
                <Icons.gitHub className="h-4 w-4" />
              </Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
