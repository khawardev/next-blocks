import { AllBlocks } from '@/components/all-blocks/All-Blocks'
import StaticBanner from '@/components/StaticBanner'
import React from 'react'

const page = () => {
    return (
        <div className=' container-c '>
            <StaticBanner title="All UI Components" badge={'All Blocks'} />
            <AllBlocks className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'} />

        </div>
    )
}

export default page