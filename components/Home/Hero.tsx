import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Icons } from "@/components/Navbar/icons";
import { Badge } from "../ui/badge";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "./page-header";

export const Weblink = ({ children, link }: any) => {
  return (
    <span onClick={() => window.open(link, '_blank')} className={'hover:cursor-pointer hover:underline dark:text-white  font-bold'}>
      {children}
    </span>
  )
};
export default function Hero() {
  return (
    <PageHeader>
      <Badge> <Icons.logo className="h-[14px] w-[14px] mr-1" /> Introducing Next Blocks <ArrowRightIcon className="ml-1 h-3 w-3" /></Badge>
      <PageHeaderHeading className="md:block hidden">
        Transform your  <br />Applications with Next Blocks
      </PageHeaderHeading>
      <PageHeaderHeading className=" md:hidden block">
        Transform your <br /> Apps with Next Blocks
      </PageHeaderHeading>
      <PageHeaderDescription >
        Discover high-quality UI components built with <Weblink link={'https://nextjs.org/'}> Next.js</Weblink>, <Weblink link={'https://tailwindcss.com/'}> Tailwindcss </Weblink> and <Weblink link={'https://ui.shadcn.com/'}>shadcn ui</Weblink>. Easy copy and paste components to elevate your Apps!
      </PageHeaderDescription>
      <PageActions>
        <Link href="/docs" >
          <Button variant="default">
            Get Started
          </Button>
        </Link>
        <Link href="/components" >
          <Button variant="outline">
            Explore Blocks
          </Button>
        </Link>
      </PageActions>
    </PageHeader>
  );
}
