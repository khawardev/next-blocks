import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export const Features = () => (
    <div className="w-full py-20" id="features">
        <div className="container mx-auto">
            <div className="flex flex-col gap-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Link href="blocks/features/feature1" className="hover:opacity-70">
                        <div className="flex flex-col h-full">
                            <div className="bg-muted rounded-md aspect-video p-8 lg:p-20 h-full">
                                <Image
                                    src="https://github.com/tommyjepsen/twblocks/blob/main/public/feature1.png?raw=true"
                                    alt="feature1"
                                    width={3600}
                                    height={1972}
                                    layout="responsive"
                                    className="rounded-md"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);