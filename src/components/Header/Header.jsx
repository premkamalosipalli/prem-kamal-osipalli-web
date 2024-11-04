import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/icons/common/logo.png";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-16 w-16" alt="Logo" />
                        <span className="text-3xl font-bold text-black">Port</span>
                        <span className="text-3xl font-bold text-blue-800">folio</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-blue-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log In
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-8 h-8"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                    {/* Navigation Links */}
                    <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-800" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/studyRoom"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-800" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                                    }
                                >
                                    Study Room
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/resumeCheck"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-800" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                                    }
                                >
                                    Resume Check
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-blue-800" : "text-gray-700"} lg:hover:bg-transparent lg:border-0 hover:text-blue-800 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
