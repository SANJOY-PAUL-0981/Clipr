import { Navbar } from '../components/Navbar'
import { HeroElement } from "../components/HeroElement"
import { Footer } from '../components/Footer'
import { InputBox } from '../components/InputBox'
import { ClickAnalyticsButton } from '../components/ClickAnalyticsButton'

export const HomePage = () => {
    return (
        <div className='bg-[#050607e1] h-dvh flex flex-col justify-between'>
            <Navbar />
            <div className='flex flex-col gap-10 justify-center'>
                <HeroElement />
                <InputBox />
                <ClickAnalyticsButton />
            </div>
            <Footer />
        </div>
    )
}