import { AllBlocks } from "@/components/blocks/AllBlocks";
import StaticBanner from "@/components/staticBanner"
import { AllBlocksData } from "@/data/blocks";

const page = async ({ params }: any) => {
  const { category } = await params;
  const byCategoryBlocks = AllBlocksData.filter(block => block.category === category);

  return (
    <div className=' container-c px-0 md:px-4'>
      <StaticBanner title={`${category[0].toUpperCase() + category?.substring(1)} Sections`} badge={'Category'} />
      <AllBlocks AllBlocksData={byCategoryBlocks} className={'grid grid-cols-1 md:grid-cols-2 gap-8'} />
    </div>
  )
}

export default page