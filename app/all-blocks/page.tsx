import { AllBlocks } from '@/components/AllBlocks/AllBlocks'
import StaticBanner from '@/components/StaticBanner'
import React from 'react'
import AllBlocksData from '@/data/blocks.json'
import BlurFade from '@/components/ui/blur-fade'

const page = () => {
    return (
        <div className=' container-c '>
            <StaticBanner title="All UI Components" badge={'All Blocks'} />

            <AllBlocks AllBlocksData={AllBlocksData} className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'} />

        </div>
    )
}

export default page