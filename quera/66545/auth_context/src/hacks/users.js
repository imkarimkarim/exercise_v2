const usersKey = "__users__";
const users = {};
const persist = () =>
  window.localStorage.setItem(usersKey, JSON.stringify(users));
const load = () =>
  Object.assign(users, JSON.parse(window.localStorage.getItem(usersKey)));

try {
  load();
} catch (error) {
  persist();
}

function authenticate({ username, password }) {
  const id = hash(username);
  const user = users[id] || {};
  if (user.passwordHash === hash(password)) {
    return { ...user, token: btoa(user.id) };
  }
  throw new Error("Invalid username or password");
}

function create({ username, password }) {
  const id = hash(username);
  const passwordHash = hash(password);
  if (users[id]) {
    throw new Error(`Cannot create a new user with the username "${username}"`);
  }
  users[id] = { id, username, passwordHash };
  persist();
}

function read(id) {
  validateUser(id);
  const { passwordHash, ...user } = users[id];
  return user;
}

function validateUser(id) {
  load();
  if (!users[id]) {
    throw new Error(`No user with the id "${id}"`);
  }
}

function hash(str) {
  var hash = 5381,
    i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return String(hash >>> 0);
}

export { authenticate, create, read, hash };
