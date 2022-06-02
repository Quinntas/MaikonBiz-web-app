import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
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
    <Layout>
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
          id="password"
          name="password"
          type="password"
          required={true}
          minLength={8}
          {...register("password")}
          placeholder="password"
        ></input>

        <input
          id="fullName"
          name="fullName"
          type="fullName"
          required={true}
          minLength={8}
          {...register("fullName")}
          placeholder="fullName"
        ></input>

        <input
          id="nickName"
          name="nickName"
          type="nickName"
          required={true}
          minLength={8}
          {...register("nickName")}
          placeholder="nickName"
        ></input>

        <input
          id="phoneNumber"
          name="phoneNumber"
          type="phoneNumber"
          required={true}
          minLength={8}
          {...register("phoneNumber")}
          placeholder="phoneNumber"
        ></input>

        <input
          id="avatar"
          name="avatar"
          type="avatar"
          required={true}
          minLength={8}
          {...register("avatar")}
          placeholder="avatar"
        ></input>

        <input
          id="identifyAs"
          name="identifyAs"
          type="identifyAs"
          required={true}
          minLength={8}
          {...register("identifyAs")}
          placeholder="identifyAs"
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
    </Layout>
  );
}

export default RegisterPage;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
