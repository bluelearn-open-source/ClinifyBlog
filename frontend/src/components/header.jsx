import React from "react";
import styles from "../../styles/header.module.scss";

const SearchIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M7.96327 16C9.66157 15.9996 11.3109 15.4054 12.6487 14.312L16.8548 18.708L18.2078 17.294L14.0017 12.898C15.0484 11.4997 15.6173 9.77544 15.6177 8C15.6177 3.589 12.1837 0 7.96327 0C3.74281 0 0.308838 3.589 0.308838 8C0.308838 12.411 3.74281 16 7.96327 16ZM7.96327 2C11.1293 2 13.7041 4.691 13.7041 8C13.7041 11.309 11.1293 14 7.96327 14C4.7972 14 2.22244 11.309 2.22244 8C2.22244 4.691 4.7972 2 7.96327 2Z"
            fill="#FFFFFF"
        />
    </svg>
);

export default function Header() {
    return (
        <div className={styles.navbarbase}>
            <nav className="h-16 px-16 bg-bg">
                <ul className="flex items-center justify-between h-full max-w-full">
                    <li>
                        <a href="#" className="logo-text">
                            Clinify Blog
                        </a>
                    </li>
                    <div className="flex flex-row">
                        <div className="flex self-center w-64 bg-gray-100 rounded-full shadow bg-opacity-10 min-w-max">
                            <button
                                className="flex items-center justify-end w-auto p-2 text-blue-500 bg-transparent rounded-full hover:text-blue-400 focus:outline-none "
                            >
                                <div className="px-1">
                                    <SearchIcon />
                                </div>
                            </button>
                            <input
                                className="w-full p-2 bg-transparent rounded focus:outline-none"
                                type="text"
                                placeholder="Search..."
                            />
                        </div>
                        <div className='relative inline-block'>
                            <li className="self-center pl-8">
                                <a href="#" className="self-center font-semibold leading-none text-gray-100 text-l">Categories</a>
                            </li>
                            <div>
                                <div className='absolute flex p-4 bg-white rounded'>
                                    <div className='p-4 border-r-2 border-gray-300'>

                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Education</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Finance</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Clinify Events</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Business</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Coding</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">Science</a>
                                    </div>
                                    <div className='p-4'>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 ">Travel</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 ">Startup</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 ">Travel</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 ">Sports</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 ">Technology</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 ">Food</a>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <button className="flex flex-row p-2 pr-4 mx-2 bg-white rounded-full text-bg focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                            </svg>
                            <p className="self-center font-semibold leading-none text-l text-bg font-mulish">
                                Post
                            </p>
                        </button>
                        <button className="flex flex-row p-2 mx-2 bg-white rounded-full text-bg focus:outline-none">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                                    stroke="#1B3940"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                    stroke="#1B3940"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </ul>
            </nav>
        </div>
    );
}
