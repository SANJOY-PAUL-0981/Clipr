import { SiGithub } from "react-icons/si";
import { IoExtensionPuzzle } from "react-icons/io5";
import { BiCut } from "react-icons/bi";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export const Navbar = ({ setError }) => {

    const extension = () => {
        setError("Extension is under development")
    }

    return (
        <div className="flex p-5 justify-between px-28">
            <Link to="/">
                <div className="text-yellow-400 font-bold text-4xl flex justify-center items-center cursor-pointer font-pop">
                    Clipr <BiCut className="pt-1 text-white" />
                </div>
            </Link>
            <div className="text-yellow-400 flex items-center text-3xl gap-20">
                <a
                    href="https://github.com/SANJOY-PAUL-0981/Clipr"
                    target="blank_">
                    <SiGithub className="cursor-pointer hover:text-white text-bold duration-300 ease-in-out" />
                </a>
                <button onClick={extension}>
                    <IoExtensionPuzzle className="cursor-pointer hover:text-white text-bold duration-300 ease-in-out" />
                </button>
            </div>
        </div>
    )
}