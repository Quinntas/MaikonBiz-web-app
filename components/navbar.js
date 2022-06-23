import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Maikon Biz</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <a href="#">Logar</a>
                    <a href="#">FAQs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <a href="./index.html"></a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="persona">Persona Shop</a>
                  </li>
                  <li>
                    <a href="#">Paginas</a>
                    <ul className="dropdown">
                      <li>
                        <a href="./about.html">Criar Persona</a>
                      </li>
                      <li>
                        <a href="./shop-details.html">Sobre</a>
                      </li>
                      <li>
                        <a href="./shopping-cart.html">Carrinho</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contato</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <a href="#" className="search-switch">
                  <img src="img/icon/search.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/icon/heart.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/icon/cart.png" alt="" /> <span>0</span>
                </a>
                <div className="price">$0.00</div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}
