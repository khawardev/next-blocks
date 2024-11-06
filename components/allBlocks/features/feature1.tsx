import { Badge } from "@/components/ui/badge";
import Image from "next/image";
export const Feature01 = () => (
    <div className=" container-c">
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
    </div>
);