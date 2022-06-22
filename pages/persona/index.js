import { Fragment } from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

function PersonaPage({ data, page, numberOfPersonas, pageLimit }) {
  const router = useRouter();

  return (
    <Layout>
      <Fragment>
        <section className="pt-5 pt-md-9 mb-6" id="feature">
          <h1 className="fs-9 fw-bold mb-4 text-center"> Personas</h1>
          <div className="container">
            <div className="row">
              {data.data.map((persona) => (
                <div className="col-lg-3 col-sm-6 mb-2" key={persona.id}>
                  {" "}
                  <Link
                    href={{
                      pathname: "/persona/" + persona.id,
                    }}
                  >
                    <a>
                      <img
                        className="mb-3 ms-n3"
                        s
                        src="assets/img/category/icon1.png"
                        width="75"
                        alt="Icon"
                      />
                    </a>
                  </Link>
                  <h4 className="mb-3">
                    {persona.persona.questions[0]["Dê um nome a persona?"]}
                  </h4>
                  <p className="mb-0 fw-medium text-secondary">
                    Ocupacao:{" "}
                    {persona.persona.questions[1]["Qual o cargo que ocupa?"]}
                  </p>
                  <p className="mb-0 fw-medium text-secondary">
                    Idade:{" "}
                    {persona.persona.questions[3]["Qual a idade da persona?"]}
                  </p>
                  <p className="mb-0 fw-medium text-secondary">
                    Como se identifica:{" "}
                    {persona.persona.questions[5]["Qual o gênero da Persona?"]}
                  </p>
                  <p className="mb-0 fw-medium text-secondary">
                    Moradia:{" "}
                    {
                      persona.persona.questions[4][
                        "Qual a região de moradia da sua persona?"
                      ]
                    }
                  </p>
                  <p className="mb-0 fw-medium text-secondary">
                    Escolaridade:{" "}
                    {
                      persona.persona.questions[6][
                        "Qual o nível de escolaridade da persona?"
                      ]
                    }
                  </p>
                  <p className="mb-0 fw-medium text-secondary">
                    Renda Mensal:{" "}
                    {
                      persona.persona.questions[9][
                        "Qual a renda mensal da sua persona?"
                      ]
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => router.push(`/persona?page=${page - 1}`)}
              disabled={page <= 1}
            >
              Anterior
            </button>
            <button
              onClick={() => router.push(`/persona?page=${page + 1}`)}
              disabled={page >= Math.ceil(numberOfPersonas / pageLimit)}
            >
              Proximo
            </button>
          </div>
        </section>
      </Fragment>
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const pageLimit = 20;
  const data = await fetch(
    process.env.BASE_URL +
      "api/persona?pid=all&page=" +
      page +
      "&limit=" +
      pageLimit,
    {}
  ).then((res) => {
    return res.json();
  });
  console.log(data.data[0].persona.questions);
  return {
    props: {
      data: data,
      page: +page,
      numberOfPersonas: data.meta.length,
      pageLimit: pageLimit,
    },
  };
}

export default PersonaPage;
