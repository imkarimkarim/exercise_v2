// https://mirzaleka.medium.com/bun-crud-api-with-elysia-js-mongodb-10e73d484723

import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { logger, fileLogger } from '@bogeychan/elysia-logger';
import './db/db';
import { v1 } from './routes/v1/v1';
import PinoPretty from 'pino-pretty';

const stream = PinoPretty({
	colorize: true,
});

const app = new Elysia()
	.use(
		fileLogger({
			file: 'app.log',
		})
	)
	.use(swagger())
	.use(v1)
	.listen(3000);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type api = typeof app;
