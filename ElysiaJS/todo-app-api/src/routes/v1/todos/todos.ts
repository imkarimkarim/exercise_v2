import { Elysia } from 'elysia';

export const todos = new Elysia({ prefix: '/todos' })
	// /todos create(POST(title: string, done: boolean, nice: maxNice(+1), dateAdded: timestamp, dateUpdated: timeStamp))
	// /todos showAll(GET)
	// /todos/:id show(GET)
	// /todos/:id delete(DELETE)
	// /todos/:id update(PATCH)
	.get('/', () => 'TODOS WILL BE HERE SOON');
