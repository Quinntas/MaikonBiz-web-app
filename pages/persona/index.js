import { Fragment } from "react";
import Link from "next/link";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

function PersonaPage({ data, page, numberOfPersonas, pageLimit }) {
  const router = useRouter();

  return (
    <Layout>
      <Fragment>
        <section class="shop spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="shop__sidebar">
                  <div class="shop__sidebar__search">
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit">
                        <span class="icon_search"></span>
                      </button>
                    </form>
                  </div>
                  <div class="shop__sidebar__accordion">
                    <div class="accordion" id="accordionExample">
                      <div class="card">
                        <div class="card-heading">
                          <a data-toggle="collapse" data-target="#collapseOne">
                            Categories
                          </a>
                        </div>
                        <div
                          id="collapseOne"
                          class="collapse show"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            <div class="shop__sidebar__categories">
                              <ul class="nice-scroll">
                                <li>
                                  <a href="#">Men (20)</a>
                                </li>
                                <li>
                                  <a href="#">Women (20)</a>
                                </li>
                                <li>
                                  <a href="#">Bags (20)</a>
                                </li>
                                <li>
                                  <a href="#">Clothing (20)</a>
                                </li>
                                <li>
                                  <a href="#">Shoes (20)</a>
                                </li>
                                <li>
                                  <a href="#">Accessories (20)</a>
                                </li>
                                <li>
                                  <a href="#">Kids (20)</a>
                                </li>
                                <li>
                                  <a href="#">Kids (20)</a>
                                </li>
                                <li>
                                  <a href="#">Kids (20)</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-heading">
                          <a data-toggle="collapse" data-target="#collapseTwo">
                            Branding
                          </a>
                        </div>
                        <div
                          id="collapseTwo"
                          class="collapse show"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            <div class="shop__sidebar__brand">
                              <ul>
                                <li>
                                  <a href="#">Louis Vuitton</a>
                                </li>
                                <li>
                                  <a href="#">Chanel</a>
                                </li>
                                <li>
                                  <a href="#">Hermes</a>
                                </li>
                                <li>
                                  <a href="#">Gucci</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-heading">
                          <a
                            data-toggle="collapse"
                            data-target="#collapseThree"
                          >
                            Filter Price
                          </a>
                        </div>
                        <div
                          id="collapseThree"
                          class="collapse show"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            <div class="shop__sidebar__price">
                              <ul>
                                <li>
                                  <a href="#">$0.00 - $50.00</a>
                                </li>
                                <li>
                                  <a href="#">$50.00 - $100.00</a>
                                </li>
                                <li>
                                  <a href="#">$100.00 - $150.00</a>
                                </li>
                                <li>
                                  <a href="#">$150.00 - $200.00</a>
                                </li>
                                <li>
                                  <a href="#">$200.00 - $250.00</a>
                                </li>
                                <li>
                                  <a href="#">250.00+</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-heading">
                          <a data-toggle="collapse" data-target="#collapseFour">
                            Size
                          </a>
                        </div>
                        <div
                          id="collapseFour"
                          class="collapse show"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            <div class="shop__sidebar__size">
                              <label for="xs">
                                xs
                                <input type="radio" id="xs" />
                              </label>
                              <label for="sm">
                                s
                                <input type="radio" id="sm" />
                              </label>
                              <label for="md">
                                m
                                <input type="radio" id="md" />
                              </label>
                              <label for="xl">
                                xl
                                <input type="radio" id="xl" />
                              </label>
                              <label for="2xl">
                                2xl
                                <input type="radio" id="2xl" />
                              </label>
                              <label for="xxl">
                                xxl
                                <input type="radio" id="xxl" />
                              </label>
                              <label for="3xl">
                                3xl
                                <input type="radio" id="3xl" />
                              </label>
                              <label for="4xl">
                                4xl
                                <input type="radio" id="4xl" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-heading">
                          <a data-toggle="collapse" data-target="#collapseFive">
                            Colors
                          </a>
                        </div>
                        <div
                          id="collapseFive"
                          class="collapse show"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            <div class="shop__sidebar__color">
                              <label class="c-1" for="sp-1">
                                <input type="radio" id="sp-1" />
                              </label>
                              <label class="c-2" for="sp-2">
                                <input type="radio" id="sp-2" />
                              </label>
                              <label class="c-3" for="sp-3">
                                <input type="radio" id="sp-3" />
                              </label>
                              <label class="c-4" for="sp-4">
                                <input type="radio" id="sp-4" />
                              </label>
                              <label class="c-5" for="sp-5">
                                <input type="radio" id="sp-5" />
                              </label>
                              <label class="c-6" for="sp-6">
                                <input type="radio" id="sp-6" />
                              </label>
                              <label class="c-7" for="sp-7">
                                <input type="radio" id="sp-7" />
                              </label>
                              <label class="c-8" for="sp-8">
                                <input type="radio" id="sp-8" />
                              </label>
                              <label class="c-9" for="sp-9">
                                <input type="radio" id="sp-9"></input>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="card">
                        <div class="card-heading">
                          <a data-toggle="collapse" data-target="#collapseSix">
                            Tags
                          </a>
                        </div>
                        <div
                          id="collapseSix"
                          class="collapse show"
                          data-parent="#accordionExample"
                        >
                          <div class="card-body">
                            <div class="shop__sidebar__tags">
                              <a href="#">Product</a>
                              <a href="#">Bags</a>
                              <a href="#">Shoes</a>
                              <a href="#">Fashio</a>
                              <a href="#">Clothing</a>
                              <a href="#">Hats</a>
                              <a href="#">Accessories</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="shop__product__option">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="shop__product__option__left">
                        <p>Showing 1–12 of 126 results</p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="shop__product__option__right">
                        <p>Sort by Price:</p>
                        <select>
                          <option value="">Low To High</option>
                          <option value="">$0 - $55</option>
                          <option value="">$55 - $100</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                      <div
                        class="product__item__pic set-bg"
                        data-setbg="img/product/product-2.jpg"
                      >
                        <ul class="product__hover">
                          <li>
                            <a href="#"></a>
                          </li>
                          <li>
                            <a href="#">
                              {" "}
                              <span>Compare</span>
                            </a>
                          </li>
                          <li>
                            <a href="#"></a>
                          </li>
                        </ul>
                      </div>
                      <div class="product__item__text">
                        <h6>Piqué Biker Jacket</h6>
                        <a href="#" class="add-cart">
                          + Add To Cart
                        </a>
                        <div class="rating">
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                          <i class="fa fa-star-o"></i>
                        </div>
                        <h5>$67.24</h5>
                        <div class="product__color__select">
                          <label for="pc-4">
                            <input type="radio" id="pc-4"></input>
                          </label>
                          <label class="active black" for="pc-5">
                            <input type="radio" id="pc-5"></input>
                          </label>
                          <label class="grey" for="pc-6">
                            <input type="radio" id="pc-6"></input>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="product__pagination">
                        <a class="active" href="#">
                          1
                        </a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <span>...</span>
                        <a href="#">21</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
