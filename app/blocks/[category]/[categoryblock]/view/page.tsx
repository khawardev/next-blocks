'use client';
import BlockViewSkeleton from "@/components/block-view-skeleton";
import BlockView from "@/components/blockview/block-view";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export default function Page() {
  const pathname = usePathname()
  const blockName = pathname.split("/")[3];
  return (
    <>
      <Suspense fallback={<BlockViewSkeleton />}>
        <BlockView blockName={blockName} />
      </Suspense>
    </>
  );
}