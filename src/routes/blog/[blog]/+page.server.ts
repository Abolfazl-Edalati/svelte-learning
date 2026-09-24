import { posts } from './data.ts';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const post = posts.find((post) => post.id === +params.blog);

	if (!post) error(404);

	return {
		post
	};
}
