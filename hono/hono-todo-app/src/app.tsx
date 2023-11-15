import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { customLogger } from './funcs/utils';
import { swaggerUI } from '@hono/swagger-ui';

const app = new Hono();

app.use('*', logger(customLogger));

app.notFound((c) => {
	return c.text('404 | Not Found', 404);
});
app.get('/doc', swaggerUI({ url: '/doc' }));
app.get('/', (c) => c.text('Hello mmd!'));
app.get('/mmd/hi', (c) => c.json({ name: 'Hello mmd!' }));

serve(app);
