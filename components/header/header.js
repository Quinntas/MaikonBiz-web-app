import Head from "next/head";

export default function Header(props) {
  return (
    <Head>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://maikon.biz/wp-content/uploads/2020/06/MAIKON.BIZ-favicon-70px.png"
      ></link>
      <title>{props.title}</title>
    </Head>
  );
}
