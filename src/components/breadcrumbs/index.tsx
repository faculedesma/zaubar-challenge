import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SlArrowRight } from "react-icons/sl";
import { folders } from "../../constants/folders";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const router = useRouter();

  const { id } = router.query;
  const folder = folders.find((folder) => folder.id === id);

  return (
    <div className={styles.breadcrumbs}>
      <Link href="/media">Home</Link>
      <SlArrowRight />
      {folder?.name || "All"}
    </div>
  );
};

export default Breadcrumbs;
