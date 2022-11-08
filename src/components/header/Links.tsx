import React from "react";
import styles from "./Header.module.scss";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "My Projects",
    href: "/projects",
  },
  {
    label: "My Media",
    href: "/media",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Create Project",
    href: "/support",
  },
];

const Links = () => {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <a href={link.href}>{link.label}</a>
      ))}
    </div>
  );
};

export default Links;
