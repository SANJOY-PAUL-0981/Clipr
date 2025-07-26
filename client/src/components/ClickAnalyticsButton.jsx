import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router";

export const ClickAnalyticsButton = () => {
    return (
        <div className="flex justify-center items-center px-4 mt-4">
            <Link to="/Analytics" className="w-full sm:w-auto">
                <button
                    className="w-full sm:w-auto bg-transparent border-2 rounded-md flex justify-center items-center gap-2 text-white border-[#4d4d4de1] text-xl sm:text-2xl font-bold font-inconsol px-6 sm:px-28 py-4 sm:py-5 cursor-pointer hover:border-[#ffffffe1] duration-300 ease-in-out">
                    <TbHandClick className="text-yellow-400" />
                    Get Total Clicks
                </button>
            </Link>
        </div>
    )
}