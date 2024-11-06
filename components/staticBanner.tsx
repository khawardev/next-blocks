import { Blur, BlurDelay } from "./blur"
import { Badge } from "./ui/badge"

const StaticBanner = ({ title, badge }: { title: string, badge: string }) => {
    return (
        <div className="relative select-none ">
            <section className=' text-center flex-col space-y-4 '>
                <Blur>
                    <Badge variant='default' >{badge}</Badge>
                </Blur>
                <BlurDelay>
                    <h1 className='font-bold' >{title}</h1>
                </BlurDelay>
            </section>
        </div>
    )
}
export default StaticBanner