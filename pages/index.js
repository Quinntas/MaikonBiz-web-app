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
      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="filter__controls">
                <li class="active" data-filter="*">
                  Best Sellers
                </li>
                <li data-filter=".new-arrivals">New Arrivals</li>
                <li data-filter=".hot-sales">Hot Sales</li>
              </ul>
            </div>
          </div>
          <div class="row product__filter">
            <div class="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  data-setbg="img/product/product-1.jpg"
                >
                  <span class="label">New</span>
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
                    <label htmlFor="pc-1">
                      <input type="radio" id="pc-22"></input>
                    </label>
                    <label class="active black" htmlFor="pc-2">
                      <input type="radio" id="pc-22"></input>
                    </label>
                    <label class="grey" htmlFor="pc-3">
                      <input type="radio" id="pc-22"></input>
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
