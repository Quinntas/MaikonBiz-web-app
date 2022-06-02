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
      <section class="pt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center py-6">
              <h1 className="mb-4 fs-9 fw-bold">Crie aqui sua persona</h1>
              <p className="mb-6 lead text-secondary">
                Tools tutorials, design and innovation experts, all
                <br class="d-none d-xl-block" />
                in one place! The most intuitive way to imagine
                <br class="d-none d-xl-block" />
                your next user experience.
              </p>
              <div className="text-center text-md-start">
                <a class="btn btn-warning me-3 btn-lg" href="#!" role="button">
                  Get started
                </a>
                <a
                  class="btn btn-link text-warning fw-medium"
                  href="#!"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#popupVideo"
                >
                  <span class="fas fa-play me-2"></span>Watch the video{" "}
                </a>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <img class="pt-7 pt-md-0 img-fluid" src="vercel.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="popupVideo"
        tabindex="-1"
        aria-labelledby="popupVideo"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <iframe
              className="rounded"
              style={{ width: "100%", height: "500px" }}
              src="https://www.youtube.com/embed/DLzxrzFCyOs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

export default HomePage;
