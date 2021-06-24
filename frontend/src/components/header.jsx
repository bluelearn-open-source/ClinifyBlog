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
            <nav className="bg-bg h-16 px-16">
                <ul className="max-w-full h-full flex justify-between items-center">
                    <li>
                        <a href="#" className="logo-text">
                            Clinify Blog
                        </a>
                    </li>
                    <div className="shadow flex bg-gray-100 bg-opacity-10 w-auto min-w-max rounded-full self-center">
                        <button
                            className="bg-transparent w-auto flex justify-end items-center text-blue-500 p-2 
                        hover:text-blue-400 rounded-full
                        focus:outline-none 
                        "
                        >
                            <div className="px-1">
                                <SearchIcon />
                            </div>
                        </button>
                        <input
                            className="bg-transparent w-full rounded p-2 focus:outline-none"
                            type="text"
                            placeholder="Search..."
                        />
                    </div>
                    <div className="flex flex-row">
                        <button className="text-bg bg-white flex flex-row rounded-full p-2 mx-2 pr-4 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
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
                            <p className="text-l font-semibold self-center leading-none text-bg font-mulish">
                                Post
                            </p>
                        </button>
                        <li className="text-bg bg-white flex flex-row rounded-full p-2 mx-2">
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
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}
