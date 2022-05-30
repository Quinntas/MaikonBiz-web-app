import { Fragment } from "react";
import Link from "next/link";

function PersonaPage({ data }) {
  return (
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
              {personaId || ""}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(process.env.BASE_URL + "api/persona/0");
  const data = await res.json();
  return { props: { data } };
}

export default PersonaPage;
