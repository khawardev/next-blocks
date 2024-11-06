'use client';
import BlockView from "@/components/block-view";
import BlockViewSkeleton from "@/lib/block-view-skeleton";
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