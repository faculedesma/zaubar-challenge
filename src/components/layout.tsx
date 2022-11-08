import React from "react";
import Header from "@/components/header";
import styles from "../styles/App.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
