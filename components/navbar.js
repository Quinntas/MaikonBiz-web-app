import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <img src="nav-logo.jpeg" height="31" alt="logo" />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/persona">
                  <a className="nav-link" aria-current="page">
                    Criar Persona
                  </a>
                </Link>
              </li>
            </ul>
            <div className="d-flex ms-lg-4">
              <Link href="#">
                <a className="btn btn-secondary-outline">Login</a>
              </Link>
              <Link href="#">
                <a className="btn btn-warning ms-3">Cadastro</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
