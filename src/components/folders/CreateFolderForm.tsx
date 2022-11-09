import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import styles from "./Folders.module.scss";

const CreateFolderForm = ({ folders, setFolders, folderId, closeModal }) => {
  const [name, setName] = useState("");

  const handleCreateFolder = () => {
    const parentId = folderId;
    const newFolder = {
      id: name,
      name: name,
      parentId: parentId || null,
    };
    const updatedFolders = [...folders, newFolder];
    setFolders(updatedFolders);
    handleCloseModal();
  };

  const handleCloseModal = () => closeModal();

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <p>New Folder</p>
        <MdOutlineClose onClick={closeModal} />
      </div>
      <div className={styles.content}>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Untitled folder"
        />
        <div className={styles.actions}>
          <button onClick={handleCloseModal}>Cancel</button>
          <button disabled={!name} onClick={handleCreateFolder}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateFolderForm;
