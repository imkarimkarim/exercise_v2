import { Elysia, t } from 'elysia';
import { Todos } from '../../../db/models/todos';

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

	// get all
	.get('/', () => {
		try {
			return Todos.find({});
		} catch (error) {
			return error;
		}
	})

	// get one
	.get('/:id', (ctx) => {
		try {
			return Todos.findById(ctx.params.id);
		} catch (error) {
			return error;
		}
	})

	// add one
	.post(
		'/',
		(ctx) => {
			try {
				return new Todos({
					...ctx.body,
				}).save();
			} catch (error) {
				return error;
			}
		},
		{
			body: 'todo',
		}
	)

	// update one
	.patch(
		'/:id',
		(ctx) => {
			try {
				return Todos.updateOne({ _id: ctx.params.id }, { ...ctx.body });
			} catch (error) {
				return error;
			}
		},
		{
			body: 'todo',
		}
	)

	// delete one
	.delete('/:id', (ctx) => {
		try {
			return Todos.deleteOne({ _id: ctx.params.id });
		} catch (error) {
			return error;
		}
	});
