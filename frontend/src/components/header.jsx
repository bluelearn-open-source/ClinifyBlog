import React, { useState } from "react";
import styles from "../../styles/header.module.scss";
import { SearchIcon, PlusIcon } from "@heroicons/react/solid";


const PostButton = () => {
	return (<button className="flex flex-row p-2 pr-4 mx-2 bg-white rounded-full text-bg focus:outline-none">
		<PlusIcon className="w-6 h-6 text-current" />
		<p className="self-center font-semibold leading-none text-l text-bg font-mulish">
			Post
		</p>
	</button>);
}



const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);



const ProfileIcon = () => {
	return (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#1B3940" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#1B3940" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>);
}



function DropDownModel() {
	const T = ({ children }) => <a href="#" className="block px-2 whitespace-nowrap py-1.5 text-base text-black hover:bg-gray-100 font-mulish  font-medium leading-none ">{children}</a>
	return (<div className="relative top-4 right-16">
		<div className='absolute  flex px-8  py-4 bg-white rounded-md shadow-xl'>
			<div className='pr-4  py-0 border-r-2 border-gray-300'>
				<T>Education</T>
				<T>Finance</T>
				<T>Clinify Events</T>
				<T>Business</T>
				<T>Coding</T>
				<T>Science</T>
			</div>
			<div className='px-4 py-0'>
				<T>Design</T>
				<T>Start Up</T>
				<T>Travel</T>
				<T>Sports</T>
				<T>Technology</T>
				<T>Food</T>
			</div>
		</div>
	</div>);
}


export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const [isMouseOver, setIsMouseOver] = useState(false)
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
						<SearchBar />
						<div className='relative inline-block py-2' onMouseEnter={() =>{ setIsOpen(true)}

						}
						onMouseLeave={()=>setIsOpen(false)}
						
							>
							<button className="self-center pl-8"
								onClick={() => { setIsOpen(!isOpen) }}>
								<a href="#" className="self-center font-semibold  leading-none text-gray-100 text-l">Categories</a>
							</button>
							{isOpen &&
								<DropDownModel />
							}
						</div>
					</div>
					<div className="flex flex-row">
						<PostButton />
						<button className="flex flex-row p-2 mx-2 bg-white rounded-full text-bg focus:outline-none">
							<ProfileIcon />
						</button>
					</div>
				</ul>
			</nav>
		</div>
	);
}
