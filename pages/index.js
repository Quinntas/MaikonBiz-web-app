import { verifyToken, logout } from "/utils/requests";
import { useEffect } from "react";
import { useRouter } from "next/router";

function HomePage(props) {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      if (props.token != "") {
        const res = await verifyToken(props.token);
        if (res) {
        } else {
          logout();
        }
      }
    };

    checkToken();
  }, []);

  return (
    <>
      <h1>Hello World</h1>

      <button
        onClick={() => {
          router.push("auth/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          router.push("auth/register");
        }}
      >
        Register
      </button>
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
      <button
        onClick={() => {
          router.push("persona");
        }}
      >
        Personas
      </button>

      {(() => {
        if (props.token != "") return <h1>Logged in as {props.token}</h1>;
      })()}
    </>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

export default HomePage;
