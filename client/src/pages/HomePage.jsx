import { Navbar } from '../components/Navbar'
import { HeroElement } from "../components/HeroElement"
import { Footer } from '../components/Footer'
import { InputBox } from '../components/InputBox'
import { ClickAnalyticsButton } from '../components/ClickAnalyticsButton'
import { useEffect, useState } from 'react'

export const HomePage = () => {
    const [error, setError] = useState('');
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError('');
            }, 5000);

            return () => clearTimeout(timer); // Cleanup on unmount
        }
    }, [error]);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [copied]);

    return (
        <div className='bg-[#050607e1] min-h-screen flex flex-col justify-between'>
            <Navbar />
            <div className='flex flex-col gap-10 justify-center'>
                <HeroElement />
                <InputBox setError={setError} setCopied={setCopied} />
                <ClickAnalyticsButton />
            </div>
            <Footer />

            {error && (
                <p className="absolute bottom-5 right-5 text-red-500 border border-red-500 rounded-md p-5 bg-black/80 font-inconsol shadow-md z-50">
                    {error}
                </p>
            )}

            {copied && (
                <p className="absolute bottom-5 right-5 text-green-400 border border-green-400 rounded-md p-5 bg-black/80 font-inconsol shadow-md z-50">
                    Copied!
                </p>
            )}
        </div>
    )
}