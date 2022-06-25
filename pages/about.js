import Layout from "../components/layout";
import { verifyToken, logout } from "/utils/requests";
import { useEffect, useState } from "react";

function AboutPage({ bToken }) {
  const [token, setToken] = useState("");

  useEffect(() => {
    const checkToken = async () => {
      if (bToken != "") {
        const res = await verifyToken(bToken);
        if (res.ok) {
          setToken(await res.json());
        } else {
          logout();
        }
      }
    };

    checkToken();
  }, []);

  return (
    <Layout title="Maikon Biz" token={token} pathname="/about">
      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about__pic">
                <img
                  src="https://maikon.biz/wp-content/uploads/2021/07/Consultor-Maikon-Richardson-maikonbiz-1280x720.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="about__item">
                <h4>QUEM SOMOS NÓS</h4>
                <p>
                  Maikon Richardson é um estrategista de Marketing Digital para
                  empresas, empreendedor, consultor empresarial, instrutor e
                  palestrante, especialista em Inbound Marketing.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="about__item">
                <h4>Who We Do ?</h4>
                <p>
                  In this digital generation where information can be easily
                  obtained within seconds, business cards still have retained
                  their importance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="about__item">
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

      <section className="testimonial">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="testimonial__text">
                <span className="icon_quotations"></span>
                <p>
                  “Eu acredito que qualquer pessoa pode usar o Marketing Digital
                  para aumentar as vendas e atrair mais clientes.”
                </p>
                <div className="testimonial__author">
                  <div className="testimonial__author__pic">
                    <img src="img/about/testimonial-author.jpg" alt="" />
                  </div>
                  <div className="testimonial__author__text">
                    <h5>Maikon Richardson</h5>
                    <p>Marketing Digital</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div
                className="testimonial__pic set-bg"
                data-setbg="img/about/testimonial-pic.jpg"
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter__item">
                <div className="counter__item__number">
                  <h2 className="cn_num">1.990</h2>
                </div>
                <span>
                  Clientes <br />
                  Atendidos
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter__item">
                <div className="counter__item__number">
                  <h2 className="cn_num">112</h2>
                </div>
                <span>
                  Cursos <br />
                  Realizados
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter__item">
                <div className="counter__item__number">
                  <h2 className="cn_num">121</h2>
                </div>
                <span>
                  Palestras <br />
                  ministradas
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter__item">
                <div className="counter__item__number">
                  <h2 className="cn_num">1.672</h2>
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

      <section className="clients spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Parceiros</span>
                <h2>Clientes Felizes</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" className="client__item">
                <img src="img/clients/client-1.png" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" className="client__item">
                <img src="img/clients/client-2.png" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" className="client__item">
                <img src="img/clients/client-3.png" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" className="client__item">
                <img src="img/clients/client-4.png" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" className="client__item">
                <img src="img/clients/client-5.png" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" className="client__item">
                <img src="img/clients/client-6.png" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" className="client__item">
                <img src="img/clients/client-7.png" alt="" />
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <a href="#" className="client__item">
                <img src="img/clients/client-8.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  return { props: { bToken: context.req.cookies.token || "" } };
}

export default AboutPage;
