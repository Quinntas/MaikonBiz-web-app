import { verifyToken, logout } from "/utils/requests";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

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
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

export default HomePage;
