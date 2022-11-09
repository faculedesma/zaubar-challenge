import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdFolderOpen } from "react-icons/md";
import { BiFolderPlus } from "react-icons/bi";
import { foldersMock } from "../../constants/folders";
import Link from "next/link";
import styles from "./Folders.module.scss";

const Folders = () => {
  const router = useRouter();
  const folderId = router.query.id;
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    if (!folderId) {
      setFolders(
        foldersMock.filter((folder) => folder.breadcrumbs.length === 0)
      );
      return;
    }
    const folder = foldersMock.find((folder) => folder.id === folderId);
    setFolders(folder?.nested);
  }, [folderId]);

  return (
    <div className={styles.folders}>
      <p className={styles.title}>Folders</p>
      <div className={styles.list}>
        {folders.map((folder) => (
          <Link
            key={folder.id}
            href={{
              pathname: "/media/[id]",
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
