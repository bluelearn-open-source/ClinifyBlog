import { getBlog } from "../api/blog/[slug]";

export interface Root {
	slug: string;
	content: Content;
}

export interface Content {
	time: string;
	content: string;
	slug: string;
	user: User;
}

export interface User {
	profile: string;
	name: string;
}

const Blog = ({ content, found }: { content?: Content; found: boolean }) => {
	console.log(content);
	if (found) {
		return (
			<figure className="md:flex flex-col bg-gray-100 rounded-xl p-8">
				<div className="pt-6 text-left space-y-4">
					<blockquote>
						<p className="text-lg font-semibold">
							“{content.content}”
						</p>
					</blockquote>

					<figcaption className="font-medium flex flex-row justify-start">
						<img
							className="w-12 h-12 rounded-full mx-1"
							src={content.user.profile}
							alt={content.user.name}
							width="64"
							height="96"
						/>
						<div>
							<div className="text-cyan-600">
								{content.user.name}
							</div>
							<div className="text-gray-500">
								{new Date(content.time).toDateString()}
							</div>
						</div>
					</figcaption>
				</div>
			</figure>
		);
	}
	return (
		<div className="flex justify-center align-middle">
			Aritcle Not Found
		</div>
	);
};
export async function getServerSideProps(context) {
	const slug = context.params.slug;
	try {
		const blog = await getBlog(slug);
		return {
			props: {
				found: true,
				content: blog,
			}, // will be passed to the page component as props
		};
	} catch (error) {
		return { props: { found: false } };
	}
}
export default Blog;
