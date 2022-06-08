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
      <section className="pt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center py-6">
              <h1 className="mb-4 fs-9 fw-bold">Crie aqui sua persona</h1>
              <p className="mb-6 lead text-secondary">
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                <br className="d-none d-xl-block" />
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                <br className="d-none d-xl-block" />
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
              </p>
              <div className="text-center text-md-start">
                <a
                  className="btn btn-warning me-3 btn-lg"
                  href="#!"
                  role="button"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <img className="pt-7 pt-md-0 img-fluid" src="vercel.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="popupVideo"
        tabIndex="-1"
        aria-labelledby="popupVideo"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <iframe
              className="rounded"
              style={{ width: "100%", height: "500px" }}
              src="https://www.youtube.com/embed/DLzxrzFCyOs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <section className="pt-5" id="validation">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-2 fs-7 fw-bold">O que é a MAIKON.biz</h2>
              <br />
              <p className="mb-4 fw-medium text-secondary">
                A MAIKON.biz é uma empresa especializada em estratégias de
                Inbound Marketing para aumento de vendas e Cursos Online de
                Marketing Digital para empresas.
                <br />
                <br />
                Também oferecemos Consultoria de Inbound Marketing, Mentoria
                para Startups, Assessoria de Marketing Digital e Cursos In
                Company.
                <br />
                <br />
                <h5>Maikon Richardson</h5>
              </p>
            </div>
            <div className="col-md-5 text-end">
              <img
                className="pt-7 pt-md-0 img-fluid"
                src="https://maikon.biz/wp-content/uploads/2020/08/logo-maikon.biz-site-inbound-marketing-1280x720-v2-1280x720.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

export default HomePage;
