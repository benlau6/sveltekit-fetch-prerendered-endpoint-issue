import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = () => {
	return json({ message: 'Hello world!'});
}
