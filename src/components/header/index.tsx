import Logo from "./Logo";
import Links from "./Links";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Links />
    </div>
  );
}
