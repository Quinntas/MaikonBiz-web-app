import { useForm } from "react-hook-form";

export default function Footer(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleContact = async (form) => {};

  return (
    <>
      <section className="pb-2 pb-lg-5">
        <div className="container">
          <div className="row border-top border-top-secondary pt-7">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-6 mb-lg-0 mb-sm-2 order-1 order-md-1 order-lg-1">
              <img
                className="mb-4"
                src="assets/img/logo.svg"
                width="184"
                alt=""
              />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
              <p className="fs-2 mb-lg-4">Links Rapidos</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    Sobre
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    Blog
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    Contato
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-4 order-md-4 order-lg-3">
              <p className="fs-2 mb-lg-4">Legal stuff</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    Disclaimer
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    Financing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="#!"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4 mb-lg-0 order-2 order-md-2 order-lg-4">
              <p className="fs-2 mb-lg-4">
                Entre para nossa lista e receba conteúdos exclusivos
              </p>
              <form className="mb-3">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Seu email"
                  aria-label="phone"
                />
              </form>
              <button className="btn btn-warning fw-medium py-1">Enviar</button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-0">
        <div className="container">
          <div className="container border-top py-3">
            <div className="row justify-content-between">
              <div className="col-12 col-md-auto mb-1 mb-md-0">
                <p className="mb-0">
                  &copy; MAIKON.biz | Todos os direitos reservados.{" "}
                </p>
              </div>
              <div className="col-12 col-md-auto">
                <p className="mb-0">aaaaaaa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
