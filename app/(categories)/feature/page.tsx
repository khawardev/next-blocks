import { Features } from '@/components/allBlocks/features/page'
import StaticBanner from '@/components/staticBanner'
import React from 'react'
import AllBlocksData from '@/data/blocks.json'

const page = () => {
    
    return (
        <div className=' container-c '>
            <StaticBanner title="Features Sections" badge={'Category'} />
            <Features />
        </div>
    )
}

export default page