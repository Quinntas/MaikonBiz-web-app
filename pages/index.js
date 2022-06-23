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
      <section class="hero">
        <div class="hero__slider owl-carousel">
          <div class="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
            <div class="container">
              <div class="row">
                <div class="col-xl-5 col-lg-7 col-md-8">
                  <div class="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Buyer Persona - 2022</h2>
                    <p>Para buyer personas</p>
                    <a href="#" class="primary-btn">
                      Comprar Agora <span class="arrow_right"></span>
                    </a>
                    <div class="hero__social">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hero__items set-bg" data-setbg="img/hero/hero-2.jpg">
            <div class="container">
              <div class="row">
                <div class="col-xl-5 col-lg-7 col-md-8">
                  <div class="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Perona Advogado - 2022</h2>
                    <p>Para advogados</p>
                    <a href="#" class="primary-btn">
                      Comprar Agora <span class="arrow_right"></span>
                    </a>
                    <div class="hero__social">
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-pinterest"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="filter__controls">
                <li class="active" data-filter="*">
                  Best Sellers
                </li>
                <li data-filter=".new-arrivals">Novas Personas</li>
                <li data-filter=".hot-sales">Hot Sales</li>
              </ul>
            </div>
          </div>
          <div class="row product__filter">
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
              <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="">
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
                  <div class="rating">
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                  </div>
                  <h5>R$33.00</h5>
                  <div class="product__color__select">
                    <label for="pc-1">
                      <input type="radio" id="pc-1" />
                    </label>
                    <label class="active black" for="pc-2">
                      <input type="radio" id="pc-2" />
                    </label>
                    <label class="grey" for="pc-3">
                      <input type="radio" id="pc-3" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
              <div class="product__item sale">
                <div class="product__item__pic set-bg" data-setbg="">
                  <span class="label">Sale</span>
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
                  <h6>Advogado Persona</h6>
                  <a href="#" class="add-cart">
                    + Adcionar ao Carrinho
                  </a>
                  <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                  </div>
                  <h5>R$43.48</h5>
                  <div class="product__color__select">
                    <label for="pc-7">
                      <input type="radio" id="pc-7" />
                    </label>
                    <label class="active black" for="pc-8">
                      <input type="radio" id="pc-8" />
                    </label>
                    <label class="grey" for="pc-9">
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
