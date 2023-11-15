import fs from 'fs';

export const customLogger = (message: string, ...rest: string[]) => {
	console.log(message, ...rest);
	fs.appendFileSync('app.log', String(Date.now() + '  |' + message) + '\n');
};
