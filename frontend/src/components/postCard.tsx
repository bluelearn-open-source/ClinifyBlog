import React from "react";
import { PostPreview } from "../types/types";

const LaterSvg = () => (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M15.5 7.75H13.5625V17.4375H21.3125V15.5H15.5V7.75Z"
			fill="#F2F2F2"
		/>
		<path
			d="M15.5 0C9.6875 0 4.65 3.1 2.13125 7.94375L0 5.8125V13.5625H7.75L4.84375 10.6562C6.78125 6.78125 10.85 3.875 15.5 3.875C21.8937 3.875 27.125 9.10625 27.125 15.5C27.125 21.8937 21.8937 27.125 15.5 27.125C12.0125 27.125 8.9125 25.575 6.78125 23.0562L3.875 25.575C6.5875 28.8687 10.85 31 15.5 31C24.025 31 31 24.025 31 15.5C31 6.975 24.025 0 15.5 0Z"
			fill="#F2F2F2"
		/>
	</svg>
);

export const PostCard: React.FC<PostPreview> = ({
	title,
	backgroundlink,
	author,
}) => {
	return (
		<div>
			<div className="bg-gradient-to-br from-gray-100 via-gray-100 to-white shadow rounded-2xl h-auto w-96  p-4 flex flex-col justify-around">
				<img className="rounded-md" src={backgroundlink} alt={title} />
				<p className="w-wuto h-auto text-lg font-extrabold text-center text-gray-800">
					{title}
				</p>
				<div className="h-16 flex flex-row w-full justify-between">
					<div className="flex flex-row items-stretch justify-center w-auto py-2.5 px-0 pr-1 bg-gray-200 rounded-full">
						<img
							className="mx-4 w-12 h-12 rounded-full self-center"
							src={author.picture}
							alt={"Image of " + author.name}
						/>
						<p className="flex-1 py-2 h-full text-lg font-semibold text-gray-800 whitespace-nowrap self-center">
							{author.name}
						</p>
					</div>
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex justify-center items-center shadow-md self-end">

                        <LaterSvg/>
                    </div>
				</div>
			</div>
		</div>
	);
};
