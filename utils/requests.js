function logout() {
  fetch("/api/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function verify_token(token) {
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

export { logout, verify_token };
