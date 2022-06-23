import Layout from "../../components/layout";

function PersonaIdPage({ persona }) {
  return (
    <Layout>
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
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-7"
                    role="tab"
                  >
                    Informacao Adcional
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
                  </div>
                </div>
                <div className="tab-pane" id="tabs-7" role="tabpanel">
                  <div className="product__details__tab__content">
                    <p className="note">
                      Nam tempus turpis at metus scelerisque placerat nulla
                      deumantos solicitud felis. Pellentesque diam dolor,
                      elementum etos lobortis des mollis ut risus. Sedcus
                      faucibus an sullamcorper mattis drostique des commodo
                      pharetras loremos.
                    </p>
                    <div className="product__details__tab__content__item">
                      <h5>Products Infomation</h5>
                      <p>
                        A Pocket PC is a handheld computer, which features many
                        of the same capabilities as a modern PC. These handy
                        little devices allow individuals to retrieve and store
                        e-mail messages, create a contact file, coordinate
                        appointments, surf the internet, exchange text messages
                        and more. Every product that is labeled as a Pocket PC
                        must be accompanied with specific software to operate
                        the unit and must feature a touchscreen and touchpad.
                      </p>
                      <p>
                        As is the case with any new technology product, the cost
                        of a Pocket PC was substantial during it’s early
                        release. For approximately $700.00, consumers could
                        purchase one of top-of-the-line Pocket PCs in 2003.
                        These days, customers are finding that prices have
                        become much more reasonable now that the newness is
                        wearing off. For approximately $350.00, a new Pocket PC
                        can now be purchased.
                      </p>
                    </div>
                    <div className="product__details__tab__content__item">
                      <h5>Material used</h5>
                      <p>
                        Polyester is deemed lower quality due to its none
                        natural quality’s. Made from synthetic materials, not
                        natural like wool. Polyester suits become creased easily
                        and are known for not being breathable. Polyester suits
                        tend to have a shine to them compared to wool and cotton
                        suits, this can make the suit look cheap. The texture of
                        velvet is luxurious and breathable. Velvet is a great
                        choice for dinner party jacket and can be worn all year
                        round.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="related spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="related-title">Produtos Parecidos</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6 col-sm-6">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  data-setbg="img/product/product-1.jpg"
                >
                  <span class="label">Novo</span>
                  <ul class="product__hover">
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
                <div class="product__item__text">
                  <h6>Buyer Persona</h6>
                  <a href="#" class="add-cart">
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
  return { props: { persona: data } };
}

export default PersonaIdPage;
