"use client"

import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { Button } from "../ui/button"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
                            className="h-7 w-7 [&_svg]:size-3"
                        >
                            <span className="sr-only">view</span>
                            <FaArrowUpRightFromSquare className="  text-primary/80" />
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>View block</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}