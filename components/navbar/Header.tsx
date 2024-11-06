"use client";
import Link from 'next/link'
import { siteConfig } from "@/config/site";
import { CommandMenu } from "@/components/navbar/command-menu";
import { Icons } from "@/components/navbar/icons";
import { DesktopNav } from "@/components/navbar/desktop-nav";
import { MobileNav } from "@/components/navbar/mobile-nav";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import Blur from '../blur';
import { usePathname } from 'next/navigation';
export function Header() {

  const pathName = usePathname();
  const hideHeader = /^\/blocks\/[^/]+\/[^/]+\/view$/.test(pathName);
  if (hideHeader) {
    return null;
  }
  return (
    <Blur className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex h-16 container md:px-0 px-4 items-center">
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
            {/* <ModeToggle /> */}
            <ThemeSwitcher />
          </nav>
        </div>
      </div>
    </Blur>

  );
}
