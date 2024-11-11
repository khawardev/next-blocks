import { Feature01Code, Hero01Code, Hero02Code } from "./code";
export const countObjectsByCategory = (categoryName: string) => {
  let count = 0;

  AllBlocksData.forEach((block) => {
    if (block.category === categoryName) {
      count++;
    }
  });

  return count;
};
export const AllBlocksData = [
  {
    new: true,
    name: "feature-01",
    category: "feature",
    href: "/blocks/feature/feature-01/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: Feature01Code,
    image: {
      url: "https://raw.githubusercontent.com/tommyjepsen/twblocks/refs/heads/main/public/feature3.png",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
  {
    new: true,
    name: "hero-01",
    category: "hero",
    href: "/blocks/hero/hero-01/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: Hero01Code,
    image: {
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218237341-616d10e999d49f4ae8c35eb2.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
  {
    new: true,
    name: "hero-02",
    category: "hero",
    href: "/blocks/hero/hero-02/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: Hero02Code,
    image: {
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218241717-616d10f299d49f4ae8c35eb6.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
];
