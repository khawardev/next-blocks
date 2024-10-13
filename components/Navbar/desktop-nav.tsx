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
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { docsConfig } from "@/config/docs";

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

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-foreground/80 text-foreground/60" >Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                {docsConfig.sidebarNav.map((item, index: any) => (
                  <ul key={index} className="grid grid-cols-2 gap-2 p-3  md:w-[300px] lg:w-[400px] ">
                    {item?.items?.length && item.items.map((item, index) => (
                      <div key={item.href}>
                        {!item.disabled &&
                          (item.href &&
                            <ListItem index={index} href={item.href} title={item.title} />
                          )}
                      </div>
                    ))}
                  </ul>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
}




const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithRef<"a"> & { index: number; title: string }
>(({ className, title, index, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex  gap-2 select-none space-y-1  rounded-lg py-3 px-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >

          <div className="text-sm font-medium leading-none">  <div className="text-xs " >{index + 1}</div>{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
