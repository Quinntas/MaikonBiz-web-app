import { verifyToken, logout } from "/utils/requests";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";

function HomePage(props) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const checkToken = async () => {
      if (props.token != "") {
        const res = await verifyToken(props.token);
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
    <>
      <Layout token={token} title={"Maikon Biz"} pathname="/">
        <section className="hero">
          <div className="hero__slider owl-carousel">
            <div
              className="hero__items set-bg"
              data-setbg="/img/hero/hero-1.jpg"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-8">
                    <div className="hero__text">
                      <h6>Summer Collection</h6>
                      <h2>Buyer Persona - 2022</h2>
                      <p>Para buyer personas</p>
                      <Link href="#">
                        <a className="primary-btn">
                          Comprar Agora <span className="arrow_right"></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hero__items set-bg"
              data-setbg="/img/hero/hero-2.jpg"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-5 col-lg-7 col-md-8">
                    <div className="hero__text">
                      <h6>Summer Collection</h6>
                      <h2>Perona Advogado - 2022</h2>
                      <p>Para advogados</p>
                      <Link href="#">
                        <a className="primary-btn">
                          Comprar Agora <span className="arrow_right"></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="filter__controls">
                  <li className="active" data-filter="*">
                    Best Sellers
                  </li>
                  <li data-filter=".new-arrivals">Novas Personas</li>
                  <li data-filter=".hot-sales">Hot Sales</li>
                </ul>
              </div>
            </div>
            <div className="row product__filter">
              <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                <div className="product__item">
                  <div className="product__item__pic set-bg">
                    <Image
                      src="https://i.pravatar.cc/300?img=49"
                      layout="fill"
                    ></Image>
                    <span className="label">Novo</span>
                    <ul className="product__hover">
                      <li>
                        <Link href="#">
                          <a>
                            <img src="img/icon/heart.png" alt="" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <img src="img/icon/search.png" alt="" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>Buyer Persona</h6>
                    <Link href="#">
                      <a className="add-cart">+ Adcionar ao Carrinho</a>
                    </Link>
                    <h5>R$33.00</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix hot-sales">
                <div className="product__item sale">
                  <div className="product__item__pic set-bg">
                    <Image
                      src="https://i.pravatar.cc/300?img=50"
                      alt=""
                      layout="fill"
                    ></Image>
                    <span className="label">Sale</span>
                    <ul className="product__hover">
                      <li>
                        <Link href="#">
                          <a>
                            <img src="img/icon/heart.png" alt="" />
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            <img src="img/icon/search.png" alt="" />
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>Advogado Persona</h6>
                    <Link href="#">
                      <a className="add-cart">+ Adcionar ao Carrinho</a>
                    </Link>
                    <h5>R$43.48</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="categories__text">
                  <h2>
                    Nova Colecao <br /> <span>Promocao </span> <br />
                    Novo
                  </h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="categories__hot__deal">
                  <img src="https://i.pravatar.cc/300?img=23" alt="" />
                  <div className="hot__deal__sticker">
                    <span>Apenas</span>
                    <h5>R$29.99</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="categories__deal__countdown">
                  <span>Promocao da semana</span>
                  <h2>Ana - Buyer Persona</h2>
                  <div
                    className="categories__deal__countdown__timer"
                    id="countdown"
                  >
                    <div className="cd-item">
                      <span>3</span>
                      <p>Dias</p>
                    </div>
                    <div className="cd-item">
                      <span>1</span>
                      <p>Horas</p>
                    </div>
                    <div className="cd-item">
                      <span>50</span>
                      <p>Minutos</p>
                    </div>
                    <div className="cd-item">
                      <span>18</span>
                      <p>Segundos</p>
                    </div>
                  </div>
                  <a href="#" className="primary-btn">
                    Comprar agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}

export default HomePage;
