"use client"

import * as React from "react"
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons"

import { trackEvent } from "@/lib/events"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Button } from "./ui/button"

export function BlockCopyCodeButton({
    name,
    code,
}: {
    name: string
    code: string
}) {
    const [hasCopied, setHasCopied] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }, [hasCopied])

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        className="h-7 w-7 [&_svg]:size-3.5"
                        onClick={() => {
                            navigator.clipboard.writeText(code)
                            trackEvent({
                                name: "copy_block_code",
                                properties: {
                                    name,
                                },
                            })
                            setHasCopied(true)
                        }}
                    >
                        <span className="sr-only">Copy</span>
                        {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Copy code</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}