function PersonaIdPage({ data }) {
  return (
    <>
      <h1>{data.data.id}</h1>
      <h1>{data.data.email}</h1>
      <h1>{data.data.question_2}</h1>
      <h1>{data.data.question_3}</h1>
      <h1>{data.data.question_4}</h1>
      <h1>{data.data.question_5}</h1>
      <h1>{data.data.question_6}</h1>
      <h1>{data.data.question_7}</h1>
      <h1>{data.data.question_8}</h1>
      <h1>{data.data.question_9}</h1>
      <h1>{data.data.question_10}</h1>
      <h1>{data.data.question_11}</h1>
      <h1>{data.data.question_12}</h1>
      <h1>{data.data.question_13}</h1>
      <h1>{data.data.question_14}</h1>
      <h1>{data.data.question_15}</h1>
      <h1>{data.data.question_16}</h1>
      <h1>{data.data.question_17}</h1>
      <h1>{data.data.question_18}</h1>
      <h1>{data.data.question_19}</h1>
      <h1>{data.data.question_20}</h1>
      <h1>{data.data.question_21}</h1>
      <h1>{data.data.question_22}</h1>
      <h1>{data.data.question_23}</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(
    process.env.BASE_URL + "api/persona/" + context.query.personaId
  );
  const data = await res.json();
  return { props: { data } };
}

export default PersonaIdPage;
