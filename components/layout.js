import Footer from "./footer/footer";
import Header from "./header/header";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Maikon Biz" />
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
