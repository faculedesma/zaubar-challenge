import Logo from "./Logo";
import Links from "./Links";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Links />
    </div>
  );
};

export default Header;
