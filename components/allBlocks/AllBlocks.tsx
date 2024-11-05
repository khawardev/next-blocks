'use client'
import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { ArrowUpRight, MoveRight, PhoneCall } from 'lucide-react'
import { Button } from '../ui/button'
import { AllBlocksDataProps } from '@/types/allBlocksTypes';
import BlurFade from '../ui/blur-fade'
import Link from 'next/link'
import { Icons } from '../navbar/icons'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
export const AllBlocks = ({ comp, more, className, AllBlocksData }: AllBlocksDataProps) => {
    const router = useRouter();
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
                    <Card onClick={() => {
                        router.push(`/${block.category}/${block.name}`);
                    }}
                        key={index}
                        className='hover:cursor-pointer relative hover:bg-muted/50'>
                        {block.new && <Badge className='absolute top-5 right-5' variant='label'>new</Badge>}
                        <Image
                            height={1000}
                            className={cn(block.image.className, "md:h-[280px]")}
                            width={1000}
                            src={block.image.url}
                            alt={block.name}
                        />
                    </Card>
                ))}

            </section>

            {/* <section className='md-flex-between space-y10  gap-32'>
                <div className=' space-y-5'>
                    <h1 className=' font-bold'>Next Blocks</h1>
                    <h5 className=' text-muted-foreground'>Discover high-quality UI components built with Next.js, Tailwindcss and shadcn ui.
                        Easy copy and paste components to elevate your Apps!</h5>
                    <div className=' flex items-center gap-3'>
                        <Button>Hello 1</Button>
                        <Button variant={'outline'}>Hello 2</Button>
                    </div>
                </div>
                <Image height={1000} className='md:w-1/3  object-cover aspect-video rounded-lg w-full' width={1000} src={'https://res.cloudinary.com/denajbnh4/image/upload/v1729011280/Next%20Blocks/ldmflnaug8fsdduzpbug.svg'} alt={'name'} />
            </section> */}

            <section className='md-flex-between space-y10  gap-28 md:mx-28'>
                <div className=' w-full'>
                    <Image height={1000} className='  h-[300px]  object-cover aspect-video rounded-lg w-full' width={1000} src={'https://res.cloudinary.com/denajbnh4/image/upload/v1729011280/Next%20Blocks/ldmflnaug8fsdduzpbug.svg'} alt={'name'} />
                </div>
                <div className='w-full space-y-5'>
                    <Badge>Plateform</Badge>
                    <h1 className=' '>This is the start of something new</h1>
                    <h6 className=' text-muted-foreground'>Managing a small business today is already
                        tough. Avoid further complications by ditching
                        outdated, tedious trade methods. Our goal is to
                        streamline SMB trade, making it easier and
                        faster than ever,</h6>
                </div>
            </section>


        </main>
    )
}
