import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'next-view-transitions'
import { BlockCopyCodeButton } from '../BlockCopyCodeButton'
import { AllBlocksProps } from '@/types/allBlocksTypes';
import BlurFade from '../ui/blur-fade'
const blur_fade = 0.4;
export const AllBlocks = ({ comp, more, className, AllBlocksData }: AllBlocksProps) => {
    return (
        <main className='container-col '>
            {comp &&
                <section className=' flex-between'>
                    <h2 className=' font-extrabold'>{comp}</h2>
                    <Link href={'/all-blocks'}><Badge variant={'label'}>{more} <ArrowUpRight className='ml-1' size={13} /></Badge></Link>
                </section>
            }
            {/* <section className=' flex-between'>
                <h2 className=' font-extrabold'>{comp}</h2>
                <Link href={'/all-blocks'}><Badge variant={'label'}>{more} <ArrowUpRight className='ml-1' size={13} /></Badge></Link>
            </section> */}

            <section className={className}>
                {AllBlocksData?.map((block, index) => (
                    <div key={index}>
                        <Card className='hover:cursor-pointer relative '>
                            {block.new && <Badge className='absolute top-5 right-5' variant={'label'}>new</Badge>}
                            <Image height={1000} className='w-full' width={1000} src={block.image} alt={block.name} />
                        </Card>
                    </div>
                ))}
            </section>
            <section className='flex-between gap-32'>
                <div className=' space-y-5'>
                    <Badge variant={'label'}>New Release</Badge>
                    <h1 className=' font-extrabold'>Welcome to Our Website</h1>
                    <p className=' text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.</p>
                    <div className=' flex items-center gap-3'>
                        <Button>Hello 1</Button>
                        <Button variant={'outline'}>Hello 1</Button>
                    </div>
                </div>
                <Image height={1000} className='md:w-1/3 w-full' width={1000} src={'https://res.cloudinary.com/denajbnh4/image/upload/v1729011280/Next%20Blocks/ldmflnaug8fsdduzpbug.svg'} alt={'name'} />
            </section>


        </main>
    )
}
