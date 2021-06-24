import React from 'react'
import styles from '../../styles/header.module.scss'

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.96327 16C9.66157 15.9996 11.3109 15.4054 12.6487 14.312L16.8548 18.708L18.2078 17.294L14.0017 12.898C15.0484 11.4997 15.6173 9.77544 15.6177 8C15.6177 3.589 12.1837 0 7.96327 0C3.74281 0 0.308838 3.589 0.308838 8C0.308838 12.411 3.74281 16 7.96327 16ZM7.96327 2C11.1293 2 13.7041 4.691 13.7041 8C13.7041 11.309 11.1293 14 7.96327 14C4.7972 14 2.22244 11.309 2.22244 8C2.22244 4.691 4.7972 2 7.96327 2Z" fill="#FFFFFF" />
    </svg>
)

export default function Header() {
    return (
        <div className={styles.navbarbase}>

            <nav className="bg-bg h-16">
                <ul className="max-w-full h-full flex justify-between items-center">
                    <li>
                        <a href="#" className='logo-text'>Clinify Blog</a>
                    </li>
                    <div className="shadow flex bg-gray-100 bg-opacity-10 w-auto min-w-max	 rounded-full self-center">
                        <button className="bg-transparent w-auto flex justify-end items-center text-blue-500 p-2 
                        hover:text-blue-400 rounded-full
                        focus:outline-none 
                        ">
                            <div className="px-1">
                                <SearchIcon />
                            </div>
                        </button>
                        <input className="bg-transparent w-full rounded p-2 focus:outline-none" type="text" placeholder="Search..." />
                    </div>
                    <div>

                    </div>
                    {/* <div className="flex items-center justify-start
                    h-10 w-64 p-4
                     bg-gray-100 bg-opacity-10  rounded-full"
                    >
                        <SearchIcon />
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" for="first_name">First Name</label>
                            <input className="border py-2 px-3 text-grey-darkest" type="text" name="first_name" id="first_name"/>
                        </div>

                        </div> */}
                </ul>
            </nav>
        </div>
    )
}
