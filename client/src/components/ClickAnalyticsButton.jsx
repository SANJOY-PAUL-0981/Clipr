import { TbHandClick } from "react-icons/tb";

export const ClickAnalyticsButton = () => {
    return (
        <div className="flex justify-center items-center">
            <button
                className="bg-transparent border-2 rounded-md flex justify-center items-center gap-2 text-white border-[#4d4d4de1] text-2xl font-bold font-inconsol px-28 py-5 cursor-pointer hover:border-[#ffffffe1] duration-300 ease-in-out">
                <TbHandClick className="text-yellow-400" />
                Get Total Cicks
            </button>
        </div>
    )
}