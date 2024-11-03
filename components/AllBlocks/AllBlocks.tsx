import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '../ui/button'
import { BlockCopyCodeButton } from '../BlockCopyCodeButton'
import { AllBlocksProps } from '@/types/allBlocksTypes';
import BlurFade from '../ui/blur-fade'
import Link from 'next/link'
const blur_fade = 0.4;
export const AllBlocks = ({ comp, more, className, AllBlocksData }: AllBlocksProps) => {
    return (
        <main className='container-col '>
            {comp &&
                <section className=' flex-between'>
                    <h2 className=' font-extrabold'>{comp}</h2>
                    <Link href={'/all-blocks'}><Badge className=' px-1.5' variant={'label'}>{more} <ArrowUpRight className='ml-1' size={13} /></Badge></Link>
                </section>
            }

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

            <section className='md-flex-between space-y8  gap-32'>
                <div className=' space-y-5'>
                    {/* <Badge className=' px-2' variant={'label'}>New Release</Badge> */}
                    <h1 className=' font-bold'>Next Blocks</h1>
                    <h5 className=' text-muted-foreground'>Discover high-quality UI components built with Next.js, Tailwindcss and shadcn ui.
                        Easy copy and paste components to elevate your Apps!</h5>
                    <div className=' flex items-center gap-3'>
                        <Button>Hello 1</Button>
                        <Button variant={'outline'}>Hello 2</Button>
                    </div>
                </div>
                <Image height={1000} className='md:w-1/4  object-cover rounded-lg w-full' width={1000} src={'https://res.cloudinary.com/denajbnh4/image/upload/v1729011280/Next%20Blocks/ldmflnaug8fsdduzpbug.svg'} alt={'name'} />
            </section>

        </main>
    )
}
