"use client"
import { BlockPreview } from "@/components/block-preview"
import StaticBanner from "@/components/staticBanner"
import { Badge } from "@/components/ui/badge"
import blocks from "@/data/blocks.json"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/navbar/icons"
import { ArrowRightIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import Blur, { BlurDelay2, BlurDelay3 } from "@/components/blur"

const BreadcrumbDemo = function ({ brPage, catLink }: { brPage?: string, catLink?: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/blocks">Blocks</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/blocks/${catLink}`}>{catLink}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{brPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}



const Page = ({ params }: { params: { categoryblock: string } }) => {
  const pathname = usePathname()
  const block = blocks.find(block => block.name === params.categoryblock)
  const categoryName = pathname.split("/")[2];
  return (
    <div className=' container-c  '>
      <section className="text-center flex-center space-y-4 flex-col">
        <Blur>
          <Badge variant={'label'}> <Icons.logo className="h-[14px] w-[14px] mr-1 font-bold" />Next Blocks </Badge>
        </Blur>
        <BlurDelay2>
          <BreadcrumbDemo catLink={categoryName} brPage={block?.name} />
        </BlurDelay2>
      </section>
      <BlurDelay3 className="mt-16">
        <BlockPreview block={block} />
      </BlurDelay3>
    </div>
  )
}

export default Page