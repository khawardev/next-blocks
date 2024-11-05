"use client"
import { Features1 } from "@/components/allBlocks/features/feature1"
import { BlockPreview } from "@/components/block-preview"
import StaticBanner from "@/components/staticBanner"
import blocks from "@/data/blocks.json"

const page = ({ params }: { params: { categoryblock: string } }) => {
  const block = blocks.find(block => block.name === params.categoryblock)
  return (
    <div className=' container-c '>
      <StaticBanner title={`${params.categoryblock} Sections`} badge={'Category'} />
      <BlockPreview block={block} code={Features1} />
    </div>
  )
}

export default page