import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const blocksConfig: DocsConfig = {
  mainNav: [
    {
      title: "All Blocks",
      href: "/all-blocks",
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
          href: "/hero",
          items: [],
          label: "New",
        },
        {
          title: "Feature",
          href: "/feature",
          items: [],
          label: "New",
        },
        {
          title: "Footer",
          href: "/footer",
          items: [],
          label: "New",
        },
        {
          title: "Header",
          href: "/header",
          items: [],
          label: "New",
        },
        {
          title: "Career",
          href: "/career",
          items: [],
          label: "New",
        },
        {
          title: "Blog",
          href: "/blog",
          items: [],
          label: "New",
        },
      ],
    },
  ],
};
