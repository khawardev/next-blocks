"use client"
import * as React from "react"
import {
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react"
import { ImperativePanelHandle } from "react-resizable-panels"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Separator } from "./ui/separator"
import { Badge } from "./ui/badge"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable"
import { Icons } from "./navbar/icons"
import { BlockCopyCodeButton } from "./blockCopyCodeButton"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import Link from "next/link"

interface Block {
  name: string;
  description: string;
  registryDependencies: string[];
  files: string[];
  type: string;
  category: string;
  subcategory: string;
  style: string;
  container: { height: string; className: string; };
  code: string;
}

export function BlockPreview({ block, code }: any) {
  const [isLoading, setIsLoading] = React.useState(true)
  const ref = React.useRef<ImperativePanelHandle>(null)

  return (
    <Tabs
      id={block.name}
      defaultValue="preview"
      className="relative grid w-full scroll-m-20 gap-4"
      style={
        {
          "--container-height": block.container?.height,
        } as React.CSSProperties
      }
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <TabsList className="hidden h-8 sm:flex">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <div className="hidden items-center gap-2 sm:flex">
            <Separator
              orientation="vertical"
              className="mx-2 hidden h-4 md:flex"
            />
            <div className="flex items-center gap-2">
              <Link href={`#${block.name}`}>
                <Badge variant="outline">{block.name}</Badge>
              </Link>
            </div>
          </div>
        </div>
        {block.code && (
          <div className="flex items-center gap-2 pr-[14px] sm:ml-auto">
            <div className="hidden h-[28px] items-center gap-1.5 rounded-md border p-[2px] shadow-sm md:flex">
              <ToggleGroup
                type="single"
                defaultValue="100"
                onValueChange={(value) => {
                  if (ref.current) {
                    ref.current.resize(parseInt(value))
                  }
                }}
              >
                <ToggleGroupItem
                  value="100"
                  className="h-[22px] w-[22px] rounded-sm p-0"
                >
                  <Monitor className="h-3.5 w-3.5" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="60"
                  className="h-[22px] w-[22px] rounded-sm p-0"
                >
                  <Tablet className="h-3.5 w-3.5" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="30"
                  className="h-[22px] w-[22px] rounded-sm p-0"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <Separator
              orientation="vertical"
              className="mx-2 hidden h-4 md:flex"
            />
            <Separator orientation="vertical" className="mx-2 h-4" />
            <BlockCopyCodeButton name={block.name} code={block.code} />
          </div>
        )}
      </div>


      <TabsContent
        value="preview"
        className="relative after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-lg after:bg-muted"
      >
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel
            ref={ref}
            className="relative rounded-lg border bg-background transition-all"
            defaultSize={100}
            minSize={30}
          >
            {isLoading ? (
              <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 text-sm text-muted-foreground">
                <Icons.spinner className="h-4 w-4 animate-spin" />
                Loading...
              </div>
            ) : null}
            <iframe
              src={`/blocks/${block.style}/${block.name}`}
              height={block.container?.height}
              className="relative z-20 w-full bg-background"
              onLoad={() => {
                setIsLoading(false)
              }}
            />
          </ResizablePanel>
          <ResizableHandle className="relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block" />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </TabsContent>
      <TabsContent value="code">

        {block.code}

        {/* <div
          data-rehype-pretty-code-fragment
          dangerouslySetInnerHTML={{ __html: block.code }}
          className="w-full overflow-hidden rounded-md [&_pre]:my-0 [&_pre]:h-[--container-height] [&_pre]:overflow-auto [&_pre]:whitespace-break-spaces [&_pre]:p-6 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
        /> */}
        {/* <div className="w-full overflow-hidden rounded-md [&_pre]:my-0 [&_pre]:h-[--container-height] [&_pre]:overflow-auto [&_pre]:whitespace-break-spaces [&_pre]:p-6 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed">
          {code}
        </div> */}
      </TabsContent>
    </Tabs>
  )
}
