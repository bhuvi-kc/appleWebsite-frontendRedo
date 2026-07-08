function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString();
}

export function signup(name, email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const exists = users.find(u => u.email === email);
  if (exists) return { success: false, message: 'Email already registered.' };

  users.push({ name, email, passwordHash: simpleHash(password) });
  localStorage.setItem('users', JSON.stringify(users));
  return { success: true };
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.passwordHash === simpleHash(password));
  if (!user) return { success: false, message: 'Invalid email or password.' };

  localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
  return { success: true, user };
}

export function logout() {
  localStorage.removeItem('currentUser');
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}