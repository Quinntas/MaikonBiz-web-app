import Layout from "../components/layout";

function AboutPage() {
  return (
    <Layout>
      <section class="about spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="about__pic">
                <img
                  src="https://maikon.biz/wp-content/uploads/2021/07/Consultor-Maikon-Richardson-maikonbiz-1280x720.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>QUEM SOMOS NÓS</h4>
                <p>
                  Maikon Richardson é um estrategista de Marketing Digital para
                  empresas, empreendedor, consultor empresarial, instrutor e
                  palestrante, especialista em Inbound Marketing.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>Who We Do ?</h4>
                <p>
                  In this digital generation where information can be easily
                  obtained within seconds, business cards still have retained
                  their importance.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="about__item">
                <h4>Why Choose Us</h4>
                <p>
                  A two or three storey house is the ideal way to maximise the
                  piece of earth on which our home sits, but for older or infirm
                  people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 p-0">
              <div class="testimonial__text">
                <span class="icon_quotations"></span>
                <p>
                  “Eu acredito que qualquer pessoa pode usar o Marketing Digital
                  para aumentar as vendas e atrair mais clientes.”
                </p>
                <div class="testimonial__author">
                  <div class="testimonial__author__pic">
                    <img src="img/about/testimonial-author.jpg" alt="" />
                  </div>
                  <div class="testimonial__author__text">
                    <h5>Maikon Richardson</h5>
                    <p>Marketing Digital</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 p-0">
              <div
                class="testimonial__pic set-bg"
                data-setbg="img/about/testimonial-pic.jpg"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section class="counter spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">1.990</h2>
                </div>
                <span>
                  Clientes <br />
                  Atendidos
                </span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">112</h2>
                </div>
                <span>
                  Cursos <br />
                  Realizados
                </span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">121</h2>
                </div>
                <span>
                  Palestras <br />
                  ministradas
                </span>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter__item">
                <div class="counter__item__number">
                  <h2 class="cn_num">1.672</h2>
                </div>
                <span>
                  Alunos <br />
                  Capacitados
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="clients spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <span>Parceiros</span>
                <h2>Clientes Felizes</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src="img/clients/client-1.png" alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src="img/clients/client-2.png" alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src="img/clients/client-3.png" alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src="img/clients/client-4.png" alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src="img/clients/client-5.png" alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src="img/clients/client-6.png" alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src="img/clients/client-7.png" alt="" />
              </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" class="client__item">
                <img src="img/clients/client-8.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
