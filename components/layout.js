import Footer from "./footer/footer";
import Header from "./header/header";
import Navbar from "./navbar";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Maikon Biz" />
      <main className="main" id="top">
        <Navbar />
        {children}
        <Footer />
      </main>
      <Script src="vendors/popperjs/popper.js" />
      <Script src="vendors/bootstrap/bootstrap.min.js" />
      <Script src="vendors/is/is.min.js" />
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=window.scroll" />
      <Script src="vendors/fontawesome/all.min.js" />
      <Script src="js/theme.js"></Script>
    </>
  );
}
