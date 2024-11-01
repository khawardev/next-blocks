import { BlockPreview } from "./block-preview";

export async function BlockDisplay({ name, block }: { name: string, block: any }) {
  return (
    <BlockPreview key={`${name}`} block={block} />
  )
}
