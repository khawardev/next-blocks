import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "All Blocks",
      href: "/docs",
    },
    {
      title: "Changelog",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Catgegories",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
          label: "New",
        },
      ],
    },
  ],
};
