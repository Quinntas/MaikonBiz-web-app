async function request(url, method, bodyObject) {
  return await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObject),
  });
}

async function logout() {
  return await request("/api/logout", "GET");
}

async function verifyToken(token) {
  return await request("/api/verify-token", "POST", { token: token });
}

async function login(email, password) {
  return await request("/api/login", "POST", {
    email: email,
    password: password,
  });
}

async function Register(data) {
  return await request("/api/register", "POST", { user: data });
}

export { logout, verifyToken, login, Register };
