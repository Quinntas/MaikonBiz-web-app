import Layout from "../../components/layout";

function PersonaIdPage({ data }) {
  return <Layout></Layout>;
}

export async function getServerSideProps(context) {
  const data = await fetch(
    process.env.BASE_URL + "api/persona/" + context.query.personaId
  ).then((res) => {
    return res.json();
  });
  console.log(data);
  return { props: { data } };
}

export default PersonaIdPage;
