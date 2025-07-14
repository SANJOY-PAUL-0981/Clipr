import { BsSearch } from "react-icons/bs";

export const Search = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-3">
                <p className="text-white font-inconsol font-bold text-lg">Enter Your Short Code</p>
                <div className="text-white flex gap-5">
                    <input
                        type="text"
                        className="bg-[#212118e1] border border-[#4d4d4de1] w-[630px] h-16 text-white font-inconsol px-4 rounded-md text-lg" />
                    <button
                        className="bg-white text-black flex items-center justify-center gap-4 text-xl font-bold font-pop rounded-md px-10 py-[17px] cursor-pointer hover:bg-transparent border border-white hover:text-white duration-300 ease-in-out">
                        Search <BsSearch />
                    </button>
                </div>
            </div>
        </div>
    )
}