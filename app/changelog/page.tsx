import StaticBanner from '@/components/staticBanner'
import React from 'react'

const page = () => {
    return (
        <div className=' container-c '>
            <StaticBanner title="Keep Track of Updates" badge={'Changelog'} />
        </div>
    )
}

export default page