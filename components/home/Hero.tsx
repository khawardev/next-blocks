import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Icons } from "@/components/navbar/icons";
import { Badge } from "../ui/badge";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "./page-header";
import Link from 'next/link'
import { Blur, BlurDelay, BlurDelay2, BlurDelay3 } from "../blur";

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
      <Blur>
        <Badge> <Icons.logo className="h-[14px] w-[14px] mr-1" /> Introducing Next Blocks <ArrowRightIcon className="ml-1 h-3 w-3" /></Badge>
      </Blur>
      <BlurDelay>
        <PageHeaderHeading className="md:block hidden">
          Transform your  <br />Applications with Next Blocks
        </PageHeaderHeading>
        <PageHeaderHeading className=" md:hidden block">
          Transform your <br /> Apps with Next Blocks
        </PageHeaderHeading>
      </BlurDelay>
      <BlurDelay2>
        <PageHeaderDescription >
          Discover high-quality UI components built with <Weblink link={'https://nextjs.org/'}> Next.js</Weblink>, <Weblink link={'https://tailwindcss.com/'}> Tailwindcss </Weblink> and <Weblink link={'https://ui.shadcn.com/'}>shadcn ui</Weblink>. <br /> Easy copy and paste components to elevate your Apps!
        </PageHeaderDescription>
      </BlurDelay2>
      <BlurDelay3>
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
      </BlurDelay3>

    </PageHeader>
  );
}
