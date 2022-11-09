import Link from "next/link";
import styles from "./Header.module.scss";

const Logo = () => {
  return (
    <Link href="/dashboard">
      <div className={styles.logo}>Logo</div>
    </Link>
  );
};

export default Logo;
