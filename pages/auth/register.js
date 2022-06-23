import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { verifyToken, logout, Register, login } from "/utils/requests";
import Layout from "../../components/layout";

function RegisterPage(props) {
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

  const registerHandler = async (form) => {
    const now = new Date();
    const date =
      now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    const hour =
      now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    const currentDT = date + "-" + hour;

    form.createdOn = currentDT;
    form.modifiedOn = currentDT;
    form.role = "CLIENT";

    const reg_res = await Register(form);
    if (reg_res.ok) {
      const res = await login(form.email, form.password);
      if (res.ok) router.push("/");
    }
  };

  return (
    <>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(registerHandler)}>
                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p class="lead fw-normal mb-0 me-3">Registrar com</p>
                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>

                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0">Ou</p>
                </div>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    required={true}
                    {...register("email")}
                  />
                  <label class="form-label" for="form3Example3">
                    Email
                  </label>
                </div>

                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                    required={true}
                    minLength={8}
                    {...register("password")}
                  />
                  <label class="form-label" for="form3Example4">
                    Senha
                  </label>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg"
                    style={{ paddingLeft: 2.5, paddingRight: 2.5 }}
                  >
                    Criar Conta
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    Ja tem uma conta?{" "}
                    <Link href="/auth/login">
                      <a class="link-danger">Login</a>
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

export default RegisterPage;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
