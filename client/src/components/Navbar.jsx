import { SiGithub } from "react-icons/si";
import { IoExtensionPuzzle } from "react-icons/io5";
import { BiCut } from "react-icons/bi";
import { Link } from "react-router";

export const Navbar = () => {

    return (
        <div className="flex md:flex-row items-center justify-between px-6 md:px-28 py-4 gap-4">
            <Link to="/">
                <div className="text-yellow-400 font-bold text-3xl md:text-4xl flex items-center cursor-pointer font-pop">
                    Clipr <BiCut className="pt-1 text-white" />
                </div>
            </Link>
            <div className="text-yellow-400 flex items-center text-2xl md:text-3xl gap-10">
                <a href="https://github.com/SANJOY-PAUL-0981/Clipr" target="blank_">
                    <SiGithub className="cursor-pointer hover:text-white duration-300" />
                </a>
            </div>
        </div>

    )
}