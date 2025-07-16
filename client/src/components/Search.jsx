import { BsSearch } from "react-icons/bs";
import axios from "axios"
import { useEffect, useState } from "react";

export const Search = ({ setError }) => {
    const [clicks, setClicks] = useState(null)
    const [shortCode, setShortCode] = useState('')
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const handelClicks = async () => {
        try {
            console.log("API call happening")

            const response = await axios.post(`${baseUrl}/url/linkClicks`, {
                shortCode: shortCode.trim()
            })
            setClicks(response.data.totalClicks)
            setError('') //clears any previous error message
        } catch (err) {
            setError(err?.response?.data?.message || "Something went wrong")
            setClicks(null) //clears previous click result on failure
        }
    }

    return (
        <>
            <div className="relative">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col gap-3">
                        <p className="text-white font-inconsol font-bold text-lg">Enter Your Short Code</p>
                        <div className="text-white flex gap-5">
                            <input
                                type="text"
                                value={shortCode}
                                onChange={(e) => setShortCode(e.target.value)}
                                className="bg-[#212118e1] border border-[#4d4d4de1] w-[630px] h-16 text-white font-inconsol px-4 rounded-md text-lg"
                            />
                            <button
                                onClick={handelClicks}
                                className="bg-white text-black flex items-center justify-center gap-4 text-xl font-bold font-pop rounded-md px-10 py-[17px] cursor-pointer hover:bg-transparent border border-white hover:text-white duration-300 ease-in-out"
                            >
                                Search <BsSearch />
                            </button>
                        </div>
                        {clicks !== null && (
                            <p className="text-white text-center text-3xl font-bold font-inconsol">
                                Total Clicks: {clicks}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

}