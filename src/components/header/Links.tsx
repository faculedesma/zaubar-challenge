import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

const links = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: "projects",
    label: "My Projects",
    href: "/projects",
  },
  {
    id: "media",
    label: "My Media",
    href: "/media",
  },
  {
    id: "account",
    label: "My Account",
    href: "/account",
  },
  {
    id: "support",
    label: "Support",
    href: "/support",
  },
  {
    id: "create",
    label: "Create Project",
    href: "/projects/create",
  },
];

const Links = () => {
  return (
    <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.id} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Links;
