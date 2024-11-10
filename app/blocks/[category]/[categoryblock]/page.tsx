import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Icons } from "@/components/navbar/icons"
import Blur, { BlurDelay2, BlurDelay3, BlurDelay4 } from "@/components/blur"
import { BlockPreview } from "@/components/blockview/block-preview"
import { AllBlocksData } from "@/data/blocks"

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

const Page = ({ params }: { params: { categoryblock: string, category: string } }) => {
  const block = AllBlocksData.find(block => block.name === params.categoryblock)
  return (
    <div className=' container-c  '>
      <section className="text-center flex-center space-y-4 flex-col">
        <Blur>
          <Badge variant={'label'}> <Icons.logo className="h-[14px] w-[14px] mr-1 font-bold" />Next Blocks </Badge>
        </Blur>
        <BlurDelay2>
          <BreadcrumbDemo catLink={params.category} brPage={block?.name} />
        </BlurDelay2>
      </section>
      <BlurDelay4 className="mt-16">
        <BlockPreview block={block} />
      </BlurDelay4>
    </div>
  )
}

export default Page