import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { verifyToken, logout, login } from "/utils/requests";
import Link from "next/link";

function LoginPage(props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const checkToken = async () => {
      if (props.token != "") {
        const res = await verifyToken(props.token);
        if (res) {
          router.push("/");
        } else {
          logout();
        }
      }
    };

    checkToken();
  }, []);

  const loginHandler = async (form) => {
    const res = await login(form.email, form.password);
    if (res.ok) router.push("/");
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(loginHandler)}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Logar com</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Ou</p>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    required={true}
                    {...register("email")}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    required={true}
                    minLength={8}
                    {...register("password")}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Senha
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Lembrar neste dispotivo
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Esqueceu a senha?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: 2.5, paddingRight: 2.5 }}
                  >
                    Login
                  </button>

                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Nao tem uma conta?{" "}
                    <Link href="/auth/register">
                      <a className="link-danger">Registrar</a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginPage;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
