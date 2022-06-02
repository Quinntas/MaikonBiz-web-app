import { Fragment } from "react";
import Link from "next/link";
import Layout from "../../components/layout";

function PersonaPage({ data }) {
  return (
    <Layout>
      <Fragment>
        <h1>Persona List</h1>
        <ul>
          {data.data.map((personaId) => (
            <li key={personaId}>
              <Link
                href={{
                  pathname: "/persona/" + personaId,
                }}
              >
                <a>{personaId || ""}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(process.env.BASE_URL + "api/persona/0").then(
    (res) => {
      return res.json();
    }
  );
  return { props: { data } };
}

export default PersonaPage;
