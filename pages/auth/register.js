import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { verify_token, logout } from "/utils/requests";

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
        const res = await verify_token(props.token);
        if (res) {
          router.push("/");
        } else {
          logout();
        }
      }
    };

    checkToken();
  }, []);

  const Register = (form) => {
    const res = fetch("/api/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: form,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return undefined;
      })
      .then((data) => {
        if (data == undefined) alert("?");
        else Login(form.email, form.password);
      });
  };

  const Login = (email, password) => {
    const res = fetch("/api/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return undefined;
      })
      .then((data) => {
        if (data == undefined) alert("?");
        else router.push("/");
      });
  };

  return (
    <>
      <h1> Register Page </h1>

      <form onSubmit={handleSubmit(Register)}>
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
