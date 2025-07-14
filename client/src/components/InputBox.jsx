import { IoIosCut } from "react-icons/io";
import { FaRegClipboard } from "react-icons/fa";
import axios from "axios"
import { useEffect, useState } from "react";

export const InputBox = () => {


    return (
        <div>
            <div className="flex justify-center gap-10 items-center">
                <input
                    type="text"
                    placeholder="Enter URL"
                    className="bg-[#212118e1] border border-[#4d4d4de1] w-[630px] h-16 text-white font-inconsol px-4 rounded-md text-lg"
                />
                <button
                    className="bg-white text-black flex items-center justify-center gap-2 text-xl font-bold font-pop rounded-md px-10 py-[17px] border border-white hover:bg-transparent hover:text-white duration-300 ease-in-out cursor-pointer">
                    Trim <IoIosCut />
                </button>
            </div>
        </div>
    );
};
