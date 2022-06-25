import Footer from "./footer/footer";
import Header from "./header/header";
import Navbar from "./navbar";
import Script from "next/script";

export default function Layout(props) {
  return (
    <>
      <Header title={props.title} />
      <Navbar
        token={[props.token.tokenInfo || ""]}
        currentPath={props.pathname || ""}
      />
      {props.children}
      <Footer />
      <Script src="/js/jquery-3.3.1.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script
        src="/js/jquery.nice-select.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/js/jquery.nicescroll.min.js" strategy="beforeInteractive" />
      <Script
        src="/js/jquery.magnific-popup.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/js/jquery.countdown.min.js" strategy="beforeInteractive" />
      <Script src="/js/jquery.slicknav.js" strategy="beforeInteractive" />
      <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive" />
      <Script src="/js/mixitup.min.js" strategy="beforeInteractive" />
      <Script src="/js/main.js" />
    </>
  );
}
