import Link from "next/link";
import Image from "next/image";

function Navbar(props) {
  return (
    <>
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
                  {(() => {
                    if (props.token[0] == "") {
                      return (
                        <>
                          <Link href="/auth/register">
                            <a>REGISTRAR</a>
                          </Link>
                          <Link href="/auth/login">
                            <a>JA TEM UMA CONTA ?</a>
                          </Link>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <Link
                            href={"/user/" + props.token[0].user.nickName}
                          >
                            <a style={{ textDecoration: "none" }}>
                              {props.token[0].user.nickName}
                            </a>
                          </Link>
                          ;
                        </>
                      );
                    }
                  })()}
                  <Link href="https://maikon.biz/politica-de-privacidade/">
                    <a>FAQs</a>
                  </Link>
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
              <Link href="/">
                <a>
                  <Image
                    src="https://maikon.biz/wp-content/uploads/2017/02/MAIKON.biz-logomarca-site.png"
                    alt=""
                    width="100"
                    height="40"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <nav className="header__menu mobile-menu">
              <ul>
                <li className={props.currentPath == "/" ? "active" : ""}>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li
                  className={props.currentPath == "/persona" ? "active" : ""}
                >
                  <Link href="persona">
                    <a>Persona Shop</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://maikon.biz/gerador-de-personas/">
                    <a>Gerador de Personas</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://maikon.biz/blog/">
                    <a>Blog</a>
                  </Link>
                </li>

                <li>
                  <Link href="https://maikon.biz/contato/">
                    <a>Contato</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="header__nav__option">
              <Link href="#">
                <a className="search-switch">
                  <img src="/img/icon/search.png" alt="" />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <img src="/img/icon/heart.png" alt="" />
                </a>
              </Link>

              <Link href="#">
                <a>
                  <img src="/img/icon/cart.png" alt="" /> <span>0</span>
                </a>
              </Link>
              <div className="price">$0.00</div>
            </div>
          </div>
        </div>
        <div className="canvas__open">
          <i className="fa fa-bars"></i>
        </div>
      </div></>
  );
}

export default Navbar;
