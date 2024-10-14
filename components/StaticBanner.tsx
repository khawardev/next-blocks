import { PageHeaderDescription } from "./Home/hero/page-header"
import { Badge } from "./ui/badge"

const StaticBanner = ({ title, badge }: { title: string, badge: string }) => {
    return (
        <div className="relative select-none ">
            <section className=' text-center flex-col space-y-3 '>
                <Badge variant='default' >{badge}</Badge>
                <p className='md:text-5xl text-4xl  font-extrabold' data-aos="fade-up">{title}</p>
            </section>


        </div>
    )
}
export default StaticBanner