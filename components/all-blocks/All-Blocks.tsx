import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Allblocks {
    comp?: string,
    more?: string,
    className?: string,
}
export const AllBlocks = ({ comp, more, className }: Allblocks) => {
    return (
        <main className='container-col '>
            {comp &&
                <section className=' flex-between'>
                    <h2 className=' font-extrabold'>{comp}</h2>
                    <Link href={'/all-blocks'}><Badge variant={'label'}>{more} <ArrowUpRight className='ml-1' size={13} /></Badge></Link>
                </section>
            }
            <section className={className}>
                <Card className='hover:cursor-pointer relative '>
                    <Badge className='absolute top-5 right-5' variant={'label'}>new</Badge>
                    <Image height={1000} className='w-full' width={1000} src={'https://res.cloudinary.com/denajbnh4/image/upload/v1728897229/Next%20Blocks/zuvaminvhqqrawhm0khi.jpg'} alt={'title'} />
                </Card>
                <Card className='hover:cursor-pointer relative '>
                    <Badge className='absolute top-5 right-5' variant={'label'}>new</Badge>
                    <Image height={1000} className='w-full' width={1000} src={'https://res.cloudinary.com/denajbnh4/image/upload/v1728897229/Next%20Blocks/zuvaminvhqqrawhm0khi.jpg'} alt={'title'} />
                </Card>
                <Card className='hover:cursor-pointer relative '>
                    <Badge className='absolute top-5 right-5' variant={'label'}>new</Badge>
                    <Image height={1000} className='w-full' width={1000} src={'https://res.cloudinary.com/denajbnh4/image/upload/v1728897229/Next%20Blocks/zuvaminvhqqrawhm0khi.jpg'} alt={'title'} />
                </Card>
                <Card className='hover:cursor-pointer relative '>
                    <Badge className='absolute top-5 right-5' variant={'label'}>new</Badge>
                    <Image height={1000} className='w-full' width={1000} src={'https://res.cloudinary.com/denajbnh4/image/upload/v1728897229/Next%20Blocks/zuvaminvhqqrawhm0khi.jpg'} alt={'title'} />
                </Card>
            </section>



        </main>
    )
}
