import { SiGithub } from "react-icons/si";
import { IoExtensionPuzzle } from "react-icons/io5";
import { BiCut } from "react-icons/bi";

export const Navbar = () => {
    return(
        <div className="flex p-5 justify-between px-28">
            <div className="text-yellow-400 font-bold text-4xl flex justify-center items-center cursor-pointer font-pop">
                Clipr <BiCut className="pt-1 text-white" />
            </div>
            <div className="text-yellow-400 flex items-center text-3xl gap-20">
                <SiGithub className="cursor-pointer hover:text-white text-bold duration-300 ease-in-out" />
                <IoExtensionPuzzle className="cursor-pointer hover:text-white text-bold duration-300 ease-in-out" />
            </div>
        </div>
    )
}