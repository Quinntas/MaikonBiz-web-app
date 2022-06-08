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
                <div className="col-lg-3 col-sm-6 mb-2" key={persona.publicId}>
                  {" "}
                  <Link
                    href={{
                      pathname: "/persona/" + persona.publicId,
                    }}
                  >
                    <a>
                      <img
                        className="mb-3 ms-n3"
                        src="assets/img/category/icon1.png"
                        width="75"
                        alt="Feature"
                      />
                    </a>
                  </Link>
                  <h4 class="mb-3">{persona.questions[0].answer}</h4>
                  <p class="mb-0 fw-medium text-secondary">
                    Criado em: {persona.createdOn}
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
  console.log(data.data[0]);
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
