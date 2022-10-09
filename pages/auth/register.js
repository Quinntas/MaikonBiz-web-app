import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { verifyToken, logout, Register, login } from "/utils/requests";
import Image from "next/image";

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
                height="534"
                width="800"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(registerHandler)}>
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

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: 2.5, paddingRight: 2.5 }}
                  >
                    Criar Conta
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Ja tem uma conta?
                    <Link href="/auth/login">
                      <a className="link-danger">Login</a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
