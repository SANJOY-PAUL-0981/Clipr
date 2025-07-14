import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { Search } from "../components/Search"
import { AboutShortCode } from "../components/AboutShortCode"

export const AnalyticsPage = () => {
    return(
        <div className='bg-[#050607e1] h-dvh flex flex-col justify-between'>
            <Navbar />
            <Search />
            <AboutShortCode />
            <Footer />
        </div>
    )
}