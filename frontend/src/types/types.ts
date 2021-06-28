export interface Post {
	id: string;
	title: string;
	backgroundlink: string;
	slug: string;
	category: string;
	author: Author;
	content: string;
}
export type PostPreview = Omit<Post,"content">
export interface Author {
	id: string;
	name: string;
	picture: string;
}
