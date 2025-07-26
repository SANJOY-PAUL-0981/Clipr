import { IoIosCut } from "react-icons/io";
import { FaRegClipboard } from "react-icons/fa";
import axios from "axios"
import { useState } from "react";

export const InputBox = ({ setError, setCopied }) => {
    const [longUrl, setLongUrl] = useState('')
    const [shortUrl, setShortUrl] = useState(null)
    const [textToCopy, setTextToCopy] = useState('');
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const shortUrlGenerationHandeler = async () => {
        try {
            const response = await axios.post(`${baseUrl}/url/trim`, {
                longUrl: longUrl.trim()
            })

            setShortUrl(response.data.urlData.shortUrl)
            setTextToCopy(response.data.urlData.shortUrl)
            setError('')
        } catch (err) {
            setError(err?.response?.data?.message || "Something went wrong")
            setShortUrl(null)
        }
    }

    const copyHandeler = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // reset after 2 sec
            })
            .catch((err) => {
                console.error('Failed to copy:', err);
            });
    }

    return (
        <div>
            <div className="flex sm:flex-row justify-center gap-4 sm:gap-10 items-center px-4">
                <input
                    type="text"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="Enter URL"
                    className="bg-[#212118e1] border border-[#4d4d4de1] w-full sm:w-[630px] h-14 sm:h-16 text-white font-inconsol px-4 rounded-md text-base sm:text-lg"
                />
                <button
                    onClick={shortUrlGenerationHandeler}
                    className="bg-white text-black flex items-center justify-center gap-2 text-lg sm:text-xl font-bold font-pop rounded-md px-6 sm:px-10 py-4 sm:py-[17px] border border-white hover:bg-transparent hover:text-white duration-300 ease-in-out cursor-pointer">
                    Trim <IoIosCut />
                </button>
            </div>

            {shortUrl !== null &&
                <div className="flex justify-center items-center mt-6 sm:mt-10 px-4">
                    <p className="text-sky-400 font-inconsol flex items-center justify-center font-semibold gap-4 border rounded-md p-4 bg-black/50 border-sky-400 w-full sm:w-auto">
                        {shortUrl} <FaRegClipboard onClick={copyHandeler} className="cursor-pointer" />
                    </p>
                </div>
            }
        </div>
    );
};
