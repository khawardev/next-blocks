"use client"

import * as React from "react"
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons"

import { trackEvent } from "@/lib/events"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Button } from "../ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function BlockViewButton({
    href,
}: {
    href: string
}) {

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href={href}>
                        <Button
                            size="icon"
                            variant="outline"
                            className="h-7 w-7 [&_svg]:size-3.5"
                        >
                            <span className="sr-only">view</span>
                            <ArrowUpRight />
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>View block</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}