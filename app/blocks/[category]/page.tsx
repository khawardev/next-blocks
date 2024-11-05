import { AllBlocks } from "@/components/allBlocks/AllBlocks";
import StaticBanner from "@/components/staticBanner"
import AllBlocksData from '@/data/blocks.json'

const page = ({ params }: { params: { category: string } }) => {
  const byCategoryBlocks = AllBlocksData.filter(block => block.category === params.category);

  return (
    <div className=' container-c '>
      <StaticBanner title={`${params.category[0].toUpperCase() + params.category.substring(1)} Sections`} badge={'Category'} />
      <AllBlocks AllBlocksData={byCategoryBlocks} className={'grid grid-cols-1 md:grid-cols-2 gap-8'} />
    </div>
  )
}

export default page