"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Navbar/icons";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "./command-menu";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <div className="md:flex hidden w-full justify-between  items-center  ">
      <Link href="/" className="mr-6   flex items-center space-x-2">
        <Icons.logo className="h-5 w-5" />
        <span className="hidden font-extrabold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <div className="flex   items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/all-blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          All Blocks
        </Link>
        <Link
          href="/categories"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Categories
        </Link>
        <Link
          href="/changelog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Changelog
        </Link>
      </div>
      <div className="flex  items-center justify-between space-x-2 ">
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
  );
}
