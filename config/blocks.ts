import { MainNavItem, SidebarNavItem } from "@/types/navTypes";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const blocksConfig: DocsConfig = {
  mainNav: [
    {
      title: "All Blocks",
      href: "/blocks",
    },
    {
      title: "Changelog",
      href: "/changelog",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Catgegories",
      items: [
        {
          title: "Hero",
          href: "/blocks/hero",
          items: [],
          label: "New",
        },
        {
          title: "Feature",
          href: "/blocks/feature",
          items: [],
        },
        {
          title: "Footer",
          href: "/blocks/footer",
          items: [],
        },
        {
          title: "Header",
          href: "/blocks/header",
          items: [],
        },
        {
          title: "Faq",
          href: "/blocks/faq",
          items: [],
        },
        {
          title: "Blog",
          href: "/blocks/blog",
          items: [],
        },
      ],
    },
  ],
};
