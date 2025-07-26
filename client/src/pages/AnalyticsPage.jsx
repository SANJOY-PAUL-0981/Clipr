import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";
import { AboutShortCode } from "../components/AboutShortCode";

export const AnalyticsPage = () => {
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
        <div className="bg-[#050607e1] min-h-screen flex flex-col justify-between">
            <Navbar />
            <Search setError={setError} />
            <AboutShortCode />
            <Footer />

            {error && (
                <p className="absolute bottom-5 right-5 text-red-500 border border-red-500 rounded-md p-5 bg-black/80 font-inconsol shadow-md z-50">
                    {error}
                </p>
            )}
        </div>
    );
};
