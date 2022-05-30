function logout() {
  fetch("/api/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function verifyToken(token) {
  return fetch("/api/verify-token", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token: token }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else return undefined;
    })
    .then((data) => {
      return data;
    });
}

const login = async (email, password) => {
  return await fetch("/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => {
    if (res.ok) return res.json();
    return undefined;
  });
};

const Register = async (data) => {
  return await fetch("/api/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: data,
    }),
  }).then((res) => {
    if (res.ok) return res.json();
    return undefined;
  });
};

export { logout, verifyToken, login, Register };
