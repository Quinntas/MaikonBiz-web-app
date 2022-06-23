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
      <section className="hero">
        <div className="hero__slider owl-carousel">
          <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Buyer Persona - 2022</h2>
                    <p>Para buyer personas</p>
                    <a href="#" className="primary-btn">
                      Comprar Agora <span className="arrow_right"></span>
                    </a>
                    <div className="hero__social">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__items set-bg" data-setbg="img/hero/hero-2.jpg">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Perona Advogado - 2022</h2>
                    <p>Para advogados</p>
                    <a href="#" className="primary-btn">
                      Comprar Agora <span className="arrow_right"></span>
                    </a>
                    <div className="hero__social">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
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
                <div className="product__item__pic set-bg" data-setbg="">
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
                  <div className="rating">
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <h5>R$33.00</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-1">
                      <input type="radio" id="pc-1" />
                    </label>
                    <label className="active black" htmlFor="pc-2">
                      <input type="radio" id="pc-2" />
                    </label>
                    <label className="grey" htmlFor="pc-3">
                      <input type="radio" id="pc-3" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
              <div className="product__item sale">
                <div className="product__item__pic set-bg" data-setbg="">
                  <span className="label">Sale</span>
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
                  <h6>Advogado Persona</h6>
                  <a href="#" className="add-cart">
                    + Adcionar ao Carrinho
                  </a>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                  </div>
                  <h5>R$43.48</h5>
                  <div className="product__color__select">
                    <label htmlFor="pc-7">
                      <input type="radio" id="pc-7" />
                    </label>
                    <label className="active black" htmlFor="pc-8">
                      <input type="radio" id="pc-8" />
                    </label>
                    <label className="grey" htmlFor="pc-9">
                      <input type="radio" id="pc-9" />
                    </label>
                  </div>
                </div>
              </div>
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
