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
      <Script src="https://code.jquery.com/jquery-3.3.1.min.js" />
      <Script src="js/jquery-3.3.1.min.js" />
      <Script src="js/bootstrap.min.js" />
      <Script src="js/jquery.nice-select.min.js" />
      <Script src="js/jquery.nicescroll.min.js" />
      <Script src="js/jquery.magnific-popup.min.js" />
      <Script src="js/jquery.countdown.min.js" />
      <Script src="js/jquery.slicknav.js" />
      <Script src="js/owl.carousel.min.js" />
      <Script src="js/mixitup.min.js" />
      <Script src="js/main.js" />
    </>
  );
}
