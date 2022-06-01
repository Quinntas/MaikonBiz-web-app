import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Image
          className={styles.logo}
          src="https://maikon.biz/wp-content/uploads/2020/06/logo-negativa-maikon-biz.png"
          width="50"
          height="50"
        />

        <div className={styles.link_items}>
          <Link href={"/auth/login"}>
            <a>Login</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
