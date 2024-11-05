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
          label: "New",
        },
        {
          title: "Footer",
          href: "/blocks/footer",
          items: [],
          label: "New",
        },
        {
          title: "Header",
          href: "/blocks/header",
          items: [],
          label: "New",
        },
        {
          title: "Career",
          href: "/blocks/career",
          items: [],
          label: "New",
        },
        {
          title: "Blog",
          href: "/blocks/blog",
          items: [],
          label: "New",
        },
      ],
    },
  ],
};
