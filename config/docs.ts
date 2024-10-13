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
          title: "Hero",
          href: "/docs",
          items: [],
          label: "New",
        },
        {
          title: "Features",
          href: "/docs",
          items: [],
          label: "New",
        },
        {
          title: "Footer",
          href: "/docs",
          items: [],
          label: "New",
        },
        {
          title: "Headers",
          href: "/docs",
          items: [],
          label: "New",
        },
        {
          title: "Careers",
          href: "/docs",
          items: [],
          label: "New",
        },
        {
          title: "Blogs",
          href: "/docs",
          items: [],
          label: "New",
        },
      ],
    },
  ],
};
