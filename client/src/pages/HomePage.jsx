import { Navbar } from '../components/Navbar'
import { HeroElement } from "../components/HeroElement"
import { Footer } from '../components/Footer'
import { InputBox } from '../components/InputBox'
import { ClickAnalyticsButton } from '../components/ClickAnalyticsButton'
import { useEffect, useState } from 'react'

export const HomePage = () => {
    const [error, setError] = useState('');

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError('');
            }, 5000);

            return () => clearTimeout(timer); // Cleanup on unmount
        }
    }, [error]);
    return (
        <div className='bg-[#050607e1] h-dvh flex flex-col justify-between'>
            <Navbar setError={setError} />
            <div className='flex flex-col gap-10 justify-center'>
                <HeroElement />
                <InputBox />
                <ClickAnalyticsButton />
            </div>
            <Footer />

            {error && (
                <p className="absolute top-20 right-28 text-red-500 border border-red-500 rounded-md p-5 bg-black/80 font-inconsol shadow-md z-50">
                    {error}
                </p>
            )}
        </div>
    )
}