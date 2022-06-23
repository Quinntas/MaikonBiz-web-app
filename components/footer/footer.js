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
      <footer class="footer">
        <div className="container">
          <div className="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer__about">
                <div class="footer__logo">
                  <a href="#">
                    <img src="" alt="" />
                  </a>
                </div>
                <p>asoidaplsdapsdkoapskdopaoksd</p>
                <a href="#">
                  <img src="img/payment.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>PLANEJAR</h6>
                <ul>
                  <li>
                    <a href="#">Diagnóstico</a>
                  </li>
                  <li>
                    <a href="#">Equipe de Marketing</a>
                  </li>
                  <li>
                    <a href="#">Investimento</a>
                  </li>
                  <li>
                    <a href="#">Buyer Persona</a>
                  </li>
                  <li>
                    <a href="#">Tecnologia</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="footer__widget">
                <h6>POSICIONAR</h6>
                <ul>
                  <li>
                    <a href="#">Blog de Conteúdo</a>
                  </li>
                  <li>
                    <a href="#">Classificados</a>
                  </li>
                  <li>
                    <a href="#">Loja Virtual</a>
                  </li>
                  <li>
                    <a href="#">Marketplace</a>
                  </li>
                  <li>
                    <a href="#">Marca</a>
                  </li>
                  <li>
                    <a href="#">Redes Sociais</a>
                  </li>
                  <li>
                    <a href="#">Site</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
              <div className="footer__widget">
                <h6>NewLetter</h6>
                <div className="footer__newslatter">
                  <p>Entre para nossa lista e receba conteúdos exclusivos</p>
                  <form action="#">
                    <input type="text" placeholder="Seu email"></input>
                    <button type="submit">
                      <span className="icon_mail_alt"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="footer__copyright__text">
                <p>
                  Copyright ©
                  <script>document.write(new Date().getFullYear());</script>2022
                  Todos os direitos reservados |{" "}
                  <i class="fa fa-heart-o" aria-hidden="true"></i>{" "}
                  <a href="https://maikon.biz/" target="_blank">
                    Maikon Biz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
          <div class="search-close-switch">+</div>
          <form class="search-model-form">
            <input
              type="text"
              id="search-input"
              placeholder="Search here....."
            />
          </form>
        </div>
      </div>
    </>
  );
}
