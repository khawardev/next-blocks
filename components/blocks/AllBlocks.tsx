'use client'
import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { ArrowUpRight } from 'lucide-react'
import { AllBlocksDataProps } from '@/types/allBlocksTypes';
import BlurFade from '../ui/blur-fade'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { BlurDelay2 } from '../blur'
import MasonryGallery from '../masonary-gallery'
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { Masonry } from "react-plock";

export const AllBlocks = ({ comp, more, className, AllBlocksData }: AllBlocksDataProps) => {
    const router = useRouter();
    return (
        <main className='container-col'>
            {comp &&
                <BlurDelay2 className=' flex-between'>
                    <h3>{comp}</h3>
                    <Link href={'/blocks'}><Badge className=' px-1.5' variant={'label'}>{more} <ArrowUpRight className='ml-1' size={13} /></Badge></Link>
                </BlurDelay2>
            }
            <Masonry
                items={AllBlocksData ?? []}
                config={{
                    columns: [1, 2, 2],
                    gap: [20, 14, 10],
                    media: [640, 768, 1024],
                }}
                render={(block, index) => (
                    <div key={index} >
                        <BlurFade delay={0.04 * 6 + index * 0.3}>
                            <Link href={`/blocks/${block.category}/${block.name}`}>
                                <Card className='hover:cursor-pointer relative hover:bg-muted/50 hover:border-primary/25'>
                                    {/* {block.new && <Badge className='absolute -top-2 -right-2' variant='label'>new</Badge>} */}
                                    <Image
                                        height={1000}
                                        className={`shadow-xl ${block.image.className}`}
                                        width={1000}
                                        src={block.image.url}
                                        alt={block.name}
                                    />
                                </Card>
                            </Link>
                        </BlurFade>
                    </div>

                )}
            />
        </main>
    )
}
