"use client"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { blocksConfig } from "@/config/blocks";
import ListItem from "./desktop-nav";
export default function HeaderNavigationMenu() {
    return (
        <NavigationMenu >
            <NavigationMenuList >
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:text-foreground/80 text-foreground/60" >Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {blocksConfig.sidebarNav.map((item, index: any) => (
                            <ul key={index} className="grid grid-cols-2 gap-1 p-[12px]  md:w-[300px] lg:w-[340px] ">
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
    )
}

