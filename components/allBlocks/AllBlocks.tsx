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
                    <h3>{comp}</h3>
                    <Link href={'/blocks'}><Badge className=' px-1.5' variant={'label'}>{more} <ArrowUpRight className='ml-1' size={13} /></Badge></Link>
                </section>
            }
            <section className={className}>
                {AllBlocksData?.map((block, index) => (
                    <Link key={index} href={`/blocks/${block.category}/${block.name}`}>
                        <Card
                            className='hover:cursor-pointer relative hover:bg-muted/50 hover:border-primary/25'>
                            {block.new && <Badge className='absolute top-5 right-5' variant='label'>new</Badge>}
                            <Image
                                height={1000}
                                className={cn(block.image.className, "md:h-[280px] shadow-xl")}
                                width={1000}
                                src={block.image.url}
                                alt={block.name}
                            />
                        </Card>
                    </Link>
                ))}
            </section>



        </main>
    )
}
