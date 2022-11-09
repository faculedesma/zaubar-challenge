import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdFolderOpen } from "react-icons/md";
import { BiFolderPlus } from "react-icons/bi";
import { foldersMock } from "../../constants/folders";
import Modal from "../common/modal";
import CreateFolderForm from "./CreateFolderForm";
import styles from "./Folders.module.scss";

const Folders = () => {
  const router = useRouter();
  const folderId = router.query.id;
  const [folders, setFolders] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!folderId) {
      setFolders(foldersMock.filter((folder) => !folder.parentId));
      return;
    }
    setFolders(foldersMock.filter((folder) => folder.parentId === folderId));
  }, [folderId]);

  const openCreateModal = () => setOpen(true);

  const closeModal = () => setOpen(false);

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
        <div className={styles.create} onClick={openCreateModal}>
          <p>Create folder</p>
          <BiFolderPlus />
          {open && (
            <Modal>
              <CreateFolderForm
                folders={folders}
                setFolders={setFolders}
                folderId={folderId}
                closeModal={closeModal}
              />
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Folders;
