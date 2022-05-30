import { useEffect } from "react";
import { useRouter } from "next/router";
import { verify_token, logout } from "/utils/requests";

function AuthPage(props) {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      if (props.token != "") {
        const res = await verify_token(props.token);
        if (res) {
          router.push("/");
        } else {
          logout();
          router.push("auth/login");
        }
      } else {
        router.push("auth/login");
      }
    };

    checkToken();
  }, []);
}

export default AuthPage;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
