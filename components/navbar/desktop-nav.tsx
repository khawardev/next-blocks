"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/navbar/icons";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import HeaderNavigationMenu from "./nav-menu";
import { CommandMenu } from "./command-menu";
import { LayoutTemplate } from "lucide-react";
import Link from 'next/link'
import { countObjectsByCategory } from "@/data/blocks";
import Image from "next/image";
export function DesktopNav() {
  const pathname = usePathname();
  return (
    <div className="md:flex  hidden w-full justify-between  items-center  ">
      <Link href="/" className="mr-6 flex items-center space-x-1">
        <p className=""><Icons.logo theme="light" className="w-4 h-4" /></p>
        <span className="hidden font-extrabold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <div className="flex   items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>
        <Link
          href="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/blocks" ? "text-foreground" : "text-foreground/60"
          )}
        >
          All Blocks
        </Link>
        <HeaderNavigationMenu />
        {/* <Link
          href="/changelog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/changelog")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Changelog
        </Link>
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Documentation
        </Link> */}
      </div>
      <div className="flex items-center justify-between space-x-2 ">
        <div className="w-full flex-1 md:w-auto md:flex-none">
          <CommandMenu />
        </div>
        <nav className="flex items-center gap-2">
          <Link href={siteConfig.links.developer}>
            <Button className="rounded-lg mt-1" size={'icon'} variant={'ghost'}>
              <Image src={'https://attic.sh/r44qhgzfghw52b64th6ixln2hfbx'} alt='s' width={25} height={25} />
            </Button>
          </Link>
          <Link href={siteConfig.links.github}>
            <Button className="rounded-lg" size={'icon'} variant={'ghost'}>
              <Icons.gitHub className="h-4 w-4" />
            </Button>
          </Link>
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
}


const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithRef<"a"> & { index: number; title: string, href: string }
>(({ className, title, href, index, children, ...props }, ref) => {

  return (
    <NavigationMenuLink>
      <Link
        href={href}
        ref={ref}
        className={cn(
          "flex select-none rounded-md p-[11px] leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <span className="text-sm w-full flex-between font-medium leading-none flex-center gap-2">
          <span className="flex gap-2">
            <Icons.logo2 className="h-4 w-4  text-primary/70" />
            {title}
          </span>
          {countObjectsByCategory(title.toLowerCase())}
        </span>
      </Link>
    </NavigationMenuLink>
  )
})
ListItem.displayName = "ListItem"

export default ListItem;
