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
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
              <p className="fs-2 mb-lg-4">Planejar</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/buyer-persona/"
                  >
                    Buyer Persona
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/diagnostico/"
                  >
                    Diagnóstico
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/equipe-de-marketing/"
                  >
                    Equipe de Marketing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/estrategia-de-marketing/"
                  >
                    Estratégia de Marketing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/investimento/"
                  >
                    Investimento
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/tecnologia/"
                  >
                    Tecnologia
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
              <p className="fs-2 mb-lg-4">Posicionar</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/blog-de-conteudo/"
                  >
                    Blog de Conteúdo
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/classificados/"
                  >
                    Classificados
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/loja-virtual/"
                  >
                    Loja Virtual
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/marketplace/"
                  >
                    Marketplace
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/marca/"
                  >
                    Marca
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/redes-sociais/"
                  >
                    Redes Sociais
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
              <p className="fs-2 mb-lg-4">Relacionar</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/automacao-de-marketing/"
                  >
                    Automação de Marketing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/base-de-leads/"
                  >
                    Base de Leads
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/email-marketing/"
                  >
                    E-mail Marketing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/marketplace/"
                  >
                    Marketplace
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/midias-sociais/"
                  >
                    Mídias Sociais
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="link-900 text-secondary text-decoration-none"
                    href="https://maikon.biz/tag/nutricao-de-leads/"
                  >
                    Nutrição de Leads
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
