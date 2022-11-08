import React from "react";
import { MdFolderOpen } from "react-icons/md";
import { BiFolderPlus } from "react-icons/bi";
import Link from "next/link";
import { folders } from "../../constants/folders";
import styles from "./Folders.module.scss";

const Folders = () => {
  return (
    <div className={styles.folders}>
      <p className={styles.title}>Folders</p>
      <div className={styles.list}>
        {folders.map((folder) => (
          <Link
            href={{
              pathname: "/folders/[id]",
              query: { id: folder.id },
            }}
          >
            <div className={styles.item}>
              <MdFolderOpen />
              <span>{folder.name}</span>
            </div>
          </Link>
        ))}
        <div className={styles.create}>
          <p>Create folder</p>
          <BiFolderPlus />
        </div>
      </div>
    </div>
  );
};

export default Folders;
