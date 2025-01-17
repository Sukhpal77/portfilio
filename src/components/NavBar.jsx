import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaTasks } from 'react-icons/fa';

function Navbar() {
    return (
        <div className="flex justify-center lg:justify-end pr-5">
            <nav className="dark:bg-gray-800 flex flex-wrap justify-center gap-4 sm:gap-6 border p-2 sm:p-4 rounded-xl bg-slate-200 backdrop-blur-md bg-opacity-30">
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `px-2 sm:px-4 py-1 sm:py-2 rounded-lg flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-sm sm:text-base ${isActive
                            ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r from-orange-400 to-red-400 text-gray-800 hover:text-white dark:text-gray-300 transition-all transform hover:scale-105'
                        }`
                    }
                >
                    <FaHome className="text-lg sm:text-xl" />
                    About Me
                </NavLink>
                <NavLink
                    to="/resume"
                    className={({ isActive }) =>
                        `px-2 sm:px-4 py-1 sm:py-2 rounded-lg flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-sm sm:text-base ${isActive
                            ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r from-orange-400 to-red-400 text-gray-800 hover:text-white dark:text-gray-300 transition-all transform hover:scale-105'
                        }`
                    }
                >
                    <FaTasks className="text-lg sm:text-xl" />
                    Skills
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `px-2 sm:px-4 py-1 sm:py-2 rounded-lg flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-sm sm:text-base ${isActive
                            ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r from-orange-400 to-red-400 text-gray-800 hover:text-white dark:text-gray-300 transition-all transform hover:scale-105'
                        }`
                    }
                >
                    <FaProjectDiagram className="text-lg sm:text-xl" />
                    Projects
                </NavLink>
                {/* Uncomment the following section for the contact link */}
                {/* <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `px-2 sm:px-4 py-1 sm:py-2 rounded-lg flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2 text-sm sm:text-base ${isActive
                            ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gradient-to-r from-orange-400 to-red-400 text-gray-800 hover:text-white dark:text-gray-300 transition-all transform hover:scale-105'
                        }`
                    }
                >
                    <FaAddressBook className="text-lg sm:text-xl" />
                    Contact
                </NavLink> */}
            </nav>
        </div>
    );
}

export default Navbar;
