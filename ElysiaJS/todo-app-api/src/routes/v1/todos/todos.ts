import { Elysia, t } from 'elysia';

export const todos = new Elysia({ prefix: '/todos' })
	// schema
	.model({
		todo: t.Object({
			title: t.String(),
			description: t.String({ default: '' }),
			isDone: t.Boolean({ default: false }),
			nice: t.Number({ default: 0 }), // maxNice(+1)
		}),
	})

	// GET ALL
	.get('/', () => {
		return 'here will all the todo will be listed';
	})

	// GET /:ID
	.get('/:id', (ctx) => {
		return 'will show: ' + ctx.params.id;
	})

	// POST todo
	.post(
		'/',
		(ctx) => {
			return {
				msg: 'will save this to the db',
				body: ctx.body,
			};
		},
		{
			body: 'todo',
		}
	)

	// PATCH todo
	.patch(
		'/:id',
		(ctx) => {
			return {
				msg: 'will update: ' + ctx.params.id,
				msg2: 'to this:',
				body: ctx.body,
			};
		},
		{
			body: 'todo',
		}
	)

	// DELETE a todo
	.delete('/:id', (ctx) => {
		return 'will delete: ' + ctx.params.id;
	});

// /todos/:id delete(DELETE)
// /todos/:id update(PATCH)
