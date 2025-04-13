import { Blog01Code, FAQ01Code, Feature01Code, Feature02Code, Footer01Code, Header01Code, Hero01Code, Hero02Code, Hero03Code, Hero04Code } from "./code";
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
  {
    new: true,
    name: "hero-03",
    category: "hero",
    href: "/blocks/hero/hero-03/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: Hero03Code,
    image: {
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218184259-616d110e99d49f4ae8c35ec5.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
  {
    new: true,
    name: "hero-04",
    category: "hero",
    href: "/blocks/hero/hero-04/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: Hero04Code,
    image: {
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218243264-616d10f999d49f4ae8c35ebb.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
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
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218179295-616d105399d49f4ae8c35e66.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
  {
    new: false,
    name: "feature-02",
    category: "feature",
    href: "/blocks/hero/feature-02/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: Feature02Code,
    image: {
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218176413-616d103d99d49f4ae8c35e57.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
  {
    new: false,
    name: "header-01",
    category: "header",
    href: "/blocks/header/header-01/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: Header01Code,
    image: {
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218234430-616d10d499d49f4ae8c35ea7.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
  {
    new: false,
    name: "footer-01",
    category: "footer",
    href: "/blocks/footer/footer-01/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: Footer01Code,
    image: {
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218227499-616d109199d49f4ae8c35e89.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
  {
    new: true,
    name: "faq-01",
    category: "faq",
    href: "/blocks/faq/faq-01/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: FAQ01Code,
    image: {
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218170688-616d101499d49f4ae8c35e3e.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
  {
    new: false,
    name: "blog-01",
    category: "blog",
    href: "/blocks/blog/blog-01/view",
    container: {
      height: "730px",
      className: "w-full h-full",
    },
    code: Blog01Code,
    image: {
      url: "https://landingfoliocom.imgix.net/tailwindcomponents/1661218131421-616d00ccfe9824b06e924365.png?lossless=true&auto=format&fit=max&q=75&crop=top,left&fit=crop&auto=format",
      className: "w-full object-cover rounded-lg shadow-xl",
    },
  },
];
