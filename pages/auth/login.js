import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { verifyToken, logout, login } from "/utils/requests";

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
      <h1> Login Page </h1>

      <form onSubmit={handleSubmit(loginHandler)}>
        <input
          id="email"
          name="email"
          type="email"
          required={true}
          {...register("email")}
          placeholder="email"
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

export default LoginPage;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
