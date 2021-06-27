import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PostCard } from "../src/components/postCard";
import { PostPreview,  } from "../src/types/types";
const samplePost: PostPreview = {
	id: "3",
	title: "What happened at the ‘Clinify x Beyond Overthinking’  meetup?",
	backgroundlink:
		"./assets/bg.jfif",
	category: "Clinify Events",
	slug: "what-happened-at-the-clinify-x-beyond-overthinking-meetup-none",
	author: {
		id: "2",
		name: "Divyansh Aggarwal",
		picture:
			"/assets/divyansh.png",
	},
};

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center">
			<Head>
				<title>Blue Learn Blog</title>
				<meta
					name="description"
					content="Clinify Blog, in less words, is a place where clinify Members write (ranging from the stuff happening at Clinify to the skills they have been learning) and others read."
				/>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<main className="flex flex-col justify-center items-center">
      <p className={styles.title}>
					Welcome to{" "}
					<a href="https://github.com/Clinify-Open-Sauce/ClinifyBlog">
						Blue Learn Blog!
					</a>
				</p>
        
				
				<div className={styles.grid}>
					<PostCard {...samplePost} />
				</div>
			</main>

		</div>
	);
}
