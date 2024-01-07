import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render, fireEvent, act, waitForElement} from '@testing-library/react';

import App from '../app';
import {AuthProvider} from '../context/auth-context';
import {hash} from '../hacks/users';

beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation((...args) => {
    console.warn('window.fetch is not mocked for this call', ...args);
    return Promise.reject(new Error('This must be mocked!'));
  });
});

afterEach(() => {
  window.fetch.mockRestore();
});

test('sample test', async () => {
  const {getByText, getByPlaceholderText, getByTestId} = render(
    <AuthProvider>
      <App />
    </AuthProvider>
  );

  const user = {
    id: hash('test'),
    username: 'test',
    password: '123456'
  };

  window.fetch.mockImplementationOnce(async (url, config) => {
    expect(url).toMatch(/login/);
    expect(config.method).toBe('POST');
    const body = JSON.parse(config.body);
    expect(body).toEqual({username: user.username, password: user.password});
    return {
      status: 200,
      async json() {
        return {
          user: {
            id: user.id,
            username: user.username,
            passwordHash: hash(user.password),
            token: btoa(user.id)
          }
        };
      }
    };
  });

  expect(getByPlaceholderText(/username/i)).toBeInTheDocument();
  expect(getByTestId('login-btn')).toBeInTheDocument();
  fireEvent.change(getByPlaceholderText(/username/i), {
    target: {value: user.username}
  });
  fireEvent.change(getByPlaceholderText(/password/i), {
    target: {value: user.password}
  });

  await act(async () => fireEvent.click(getByTestId('login-btn')));
  expect(window.fetch).toHaveBeenCalledTimes(1);
  const greetingTextNode = await waitForElement(() => getByTestId('greeting'));
  expect(greetingTextNode).toHaveTextContent(`Hello ${user.username}`);
  await act(async () => fireEvent.click(getByText(/logout/i)));
  expect(getByTestId('login-btn')).toBeInTheDocument();
});
