import { BlockDisplay } from "@/components/block-display"
import blocks from "@/data/blocks.json"

export default async function BlocksPage() {
  return blocks.map((block, index) => (
    <BlockDisplay key={`${block.name}-${index}`} block={block} name={block.name} />
  ))
}
