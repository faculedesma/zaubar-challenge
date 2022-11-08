import React from "react";
import { MdFolderOpen } from "react-icons/md";
import { BiFolderPlus } from "react-icons/bi";
import styles from "./Folders.module.scss";

const folders = [
  {
    name: "folder-one",
  },
  {
    name: "folder-two",
  },
];

const Folders = () => {
  return (
    <div className={styles.folders}>
      <p className={styles.title}>Folders</p>
      <div className={styles.list}>
        {folders.map((folder) => (
          <div className={styles.item}>
            <MdFolderOpen />
            <span>{folder.name}</span>
          </div>
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
