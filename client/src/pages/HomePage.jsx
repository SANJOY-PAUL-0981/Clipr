import { Navbar } from '../components/Navbar'
import { HeroElement } from "../components/HeroElement"

export const HomePage = () => {
    return (
        <div className='bg-[#050607e1]'>
            <Navbar />
            <HeroElement />
        </div>
    )
}