import qs from 'querystringify';
import * as users from './users';

const originalFetch = window.fetch;

const sleep = (t = Math.random() * 200 + 300) =>
  new Promise(resolve => setTimeout(resolve, t));

const apiUrl = new window.URL(process.env.REACT_APP_API_URL);
const isApi = (endpoint, method = 'GET', queryParam) => (url, config) => {
  const {origin, pathname, search} = new window.URL(url);
  return (
    origin === apiUrl.origin &&
    pathname.startsWith(`${apiUrl.pathname}/${endpoint}`) &&
    config.method === method &&
    (queryParam ? qs.parse(search).hasOwnProperty(queryParam) : true)
  );
};

const fakeResponses = [
  {
    test: isApi('login', 'POST'),
    async handler(url, config) {
      await sleep();
      const body = JSON.parse(config.body);
      const user = users.authenticate({
        username: body.username,
        password: body.password
      });
      return {
        status: 200,
        json: async () => ({user})
      };
    }
  },
  {
    test: isApi('register', 'POST'),
    async handler(url, config) {
      await sleep();
      const {username, password} = JSON.parse(config.body);
      if (!username) {
        throw new Error('A username is required');
      }
      if (!password) {
        throw new Error('A password is required');
      }
      const userFields = {username, password};
      users.create(userFields);
      const user = users.authenticate(userFields);
      return {
        status: 200,
        json: async () => ({user})
      };
    }
  },
  {
    test: () => true,
    handler: (...args) => originalFetch(...args)
  }
];

window.fetch = async (...args) => {
  const {handler} = fakeResponses.find(({test}) => {
    try {
      return test(...args);
    } catch (error) {
      // ignore the error and hope everything's ok...
      return false;
    }
  });
  const groupTitle = `%c ${args[1].method} -> ${args[0]}`;
  try {
    const response = await handler(...args);
    console.groupCollapsed(groupTitle, 'color: #0f9d58');
    console.info('REQUEST:', {url: args[0], ...args[1]});
    console.info('RESPONSE:', {
      ...response,
      ...(response.json ? {json: await response.json()} : {})
    });
    console.groupEnd();
    return response;
  } catch (error) {
    let rejection = error;
    if (error instanceof Error) {
      rejection = {
        status: 500,
        message: error.message
      };
    }
    console.groupCollapsed(groupTitle, 'color: #ef5350');
    console.info('REQUEST:', {url: args[0], ...args[1]});
    console.info('REJECTION:', rejection);
    console.groupEnd();
    return Promise.reject(rejection);
  }
};
