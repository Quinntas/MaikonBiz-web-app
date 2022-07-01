import { verifyToken, logout } from "/utils/requests";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";

function PersonaIdPage({ bToken, persona }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const checkToken = async () => {
      if (bToken != "") {
        const res = await verifyToken(bToken);
        if (res.ok) {
          setToken(await res.json());
        } else {
          logout();
        }
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkToken();
  }, []);

  return (
    <Layout title="Maikon Biz" token={token}>
      <section className="shop-details">
        <div className="product__details__pic">
          <div className="container">
            <img
              src={persona.data.avatar}
              alt=""
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
        <div className="product__details__content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div className="product__details__text">
                  <h3>{persona.data.questions["QUESTION_1"]}</h3>
                  <h4>{persona.data.title}</h4>
                  <h3>
                    R${persona.data.price} <span>70.00</span>
                  </h3>
                  <p>{persona.data.description}</p>

                  <div className="product__details__cart__option">
                    <a href="#" className="primary-btn">
                      adicionar ao carrinho
                    </a>
                  </div>
                  <div className="product__details__btns__option">
                    <a href="#">
                      <i className="fa fa-heart"></i> adiconar aos favoritos
                    </a>
                  </div>
                  <div className="product__details__last__option">
                    <h5>
                      <span>Garantido Safe Checkout</span>
                    </h5>
                    <img src="/img/shop-details/details-payment.png" alt="" />
                    <ul>
                      <li>
                        <span>ID:</span> {persona.data.id}
                      </li>
                      <li>
                        <span>Categoria:</span> {persona.data.category}
                      </li>
                      <li>
                        <span>Tags:</span>{" "}
                        {persona.data.tags.map((tag) => tag + " ")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="product__details__tab">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-5"
                    role="tab"
                  >
                    Descricao
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-5" role="tabpanel">
                  <div className="product__details__tab__content">
                    <p className="note">
                      Desenvolve estratégias de marketing e identidade visual
                      das marcas e prospecta budget para implementar ações, com
                      o intuito de promover a imagem institucional e aprimorar
                      os negócios. Define o posicionamento das marcas e de
                      canais de comunicação específicos para cada público.
                      Analisa as tendências do mercado e fatores econômico e
                      financeiros e planeja e define campanhas voltadas para
                      promoção de produtos e serviços.
                    </p>
                    <div className="product__details__tab__content__item">
                      <h5>Qual seu papel na empresa</h5>
                      <p>
                        O gerente de marketing é um elemento fundamental na
                        estrutura de uma empresa ou agência de comunicação. Seu
                        papel central garante que times sejam mais eficientes e
                        direcionados às melhores campanhas e ações.
                      </p>
                      <p>
                        Contudo, nem toda companhia entende a importância desse
                        colaborador e como sua atuação é relevante na rotina do
                        Marketing.
                      </p>
                      <p>
                        Os gerentes lideram campanhas, analisam clientes e seus
                        respectivos públicos, para então transmitir essas
                        percepções aos colaboradores. Assim, o time de Marketing
                        consegue trabalhar dentro de diretrizes sólidas e com
                        liberdade criativa direcionada a resultados.
                      </p>
                    </div>
                    <div className="product__details__tab__content__item">
                      <h5>O que faz um gerente de marketing?</h5>
                      <p>
                        O gerente de marketing é o profissional encarregado de
                        realizar pesquisas de mercado e desenvolver estratégias
                        que aumentem os resultados da empresa. Naturalmente, é
                        ele também que vai liderar toda a equipe de Marketing em
                        uma companhia ou agência de comunicação. Para executar
                        esse trabalho, o gerente precisa conectar resultados com
                        os objetivos de venda.
                      </p>
                    </div>
                    <div className="product__details__tab__content__item">
                      <h5>Informacoes Pessoais</h5>
                      <p>
                        Idade:{" "}
                        <span>{persona.data.questions["QUESTION_4"]}</span>
                      </p>
                      <p>
                        Cargo:{" "}
                        <span>{persona.data.questions["QUESTION_2"]}</span>
                      </p>
                      <p>
                        Ramo:{" "}
                        <span>{persona.data.questions["QUESTION_3"]}</span>
                      </p>
                      <p>
                        Genero:{" "}
                        <span>{persona.data.questions["QUESTION_6"]}</span>
                      </p>
                      <p>
                        Morada:{" "}
                        <span>{persona.data.questions["QUESTION_5"]}</span>
                      </p>
                      <p>
                        Escolaridade:{" "}
                        <span>{persona.data.questions["QUESTION_7"]}</span>
                      </p>
                      <p>
                        Forma de Falar:{" "}
                        <span>{persona.data.questions["QUESTION_11"]}</span>
                      </p>
                      <p>
                        Renda:{" R$"}
                        <span>{persona.data.questions["QUESTION_10"]}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="related-title">Produtos Parecidos</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/product/product-1.jpg"
                >
                  <span className="label">Novo</span>
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Buyer Persona</h6>
                  <a href="#" className="add-cart">
                    + Adcionar ao Carrinho
                  </a>
                  <h5>R$67.24</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    process.env.BASE_URL + "api/persona?personaId=" + context.query.personaId
  ).then((res) => {
    return res.json();
  });
  return { props: { bToken: context.req.cookies.token || "", persona: data } };
}

export default PersonaIdPage;
