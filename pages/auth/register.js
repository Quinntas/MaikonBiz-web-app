import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { verifyToken, logout, Register, login } from "/utils/requests";

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
    Register(form);
    if (await login(form.email, form.password)) router.push("/");
  };

  return (
    <>
      <h1> Register Page </h1>

      <form onSubmit={handleSubmit(registerHandler)}>
        <input
          id="email"
          name="email"
          type="email"
          required={true}
          {...register("email")}
          placeholder="email"
        ></input>

        <input
          id="fullname"
          name="fullname"
          type="fullname"
          required={true}
          minLength={8}
          {...register("fullname")}
          placeholder="fullname"
        ></input>

        <input
          id="nickname"
          name="nickname"
          type="nickname"
          required={true}
          minLength={8}
          {...register("nickname")}
          placeholder="nickname"
        ></input>

        <input
          id="password"
          name="password"
          type="password"
          required={true}
          minLength={8}
          {...register("password")}
          placeholder="password"
        ></input>

        <button type="Submit">Login</button>
      </form>

      <button
        type="button"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </>
  );
}

export default RegisterPage;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
