import { AllBlocks } from '@/components/blocks/AllBlocks'
import StaticBanner from '@/components/staticBanner'
import React from 'react'
import { AllBlocksData } from '@/data/blocks'

const page = () => {
    return (
        <div className=' container-c '>
            <StaticBanner title="All UI Components" badge={'All Blocks'} />
            <AllBlocks AllBlocksData={AllBlocksData} className={'grid grid-cols-1 md:grid-cols-2  gap-8'} />
        </div>
    )
}

export default page