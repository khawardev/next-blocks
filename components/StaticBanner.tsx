import { Blur, BlurDelay } from "./Blur"
import { Badge } from "./ui/badge"

const StaticBanner = ({ title, badge }: { title: string, badge: string }) => {
    return (
        <div className="relative select-none ">
            <section className=' text-center flex-col space-y-3 '>
                <Blur>
                    <Badge variant='default' >{badge}</Badge>
                </Blur>
                <BlurDelay>
                    <p className='md:text-5xl text-4xl  font-extrabold' >{title}</p>
                </BlurDelay>
            </section>
        </div>
    )
}
export default StaticBanner