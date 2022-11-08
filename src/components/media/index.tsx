import React from "react";
import { GrAdd } from "react-icons/gr";
import { HiOutlineTrash } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";
import styles from "./Media.module.scss";

const AIGenerated =
  "https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg?quality=75&auto=webp";

const files = [
  {
    id: "0",
    filename: "ai-0",
    title: "AI Generated Image 0",
    uploadedDate: new Date(),
    src: AIGenerated,
    type: "jpg",
  },
  {
    id: "1",
    filename: "ai-1",
    title: "AI Generated Image 1",
    uploadedDate: new Date(),
    src: AIGenerated,
    type: "jpg",
  },
  {
    id: "2",
    filename: "ai-2",
    title: "AI Generated Image 2",
    uploadedDate: new Date(),
    src: AIGenerated,
    type: "jpg",
  },
  {
    id: "3",
    filename: "ai-3",
    title: "AI Generated Image 3",
    uploadedDate: new Date(),
    src: AIGenerated,
    type: "jpg",
  },
  {
    id: "4",
    filename: "ai-4",
    title: "AI Generated Image 4",
    uploadedDate: new Date(),
    src: AIGenerated,
    type: "jpg",
  },
  {
    id: "5",
    filename: "ai-5",
    title: "AI Generated Image 5",
    uploadedDate: new Date(),
    src: AIGenerated,
    type: "jpg",
  },
  {
    id: "6",
    filename: "ai-6",
    title: "AI Generated Image 6",
    uploadedDate: new Date(),
    src: AIGenerated,
    type: "jpg",
  },
  {
    id: "6",
    filename: "ai-6",
    title: "AI Generated Image 6",
    uploadedDate: new Date(),
    src: AIGenerated,
    type: "jpg",
  },
];

const Media = () => {
  return (
    <div className={styles.media}>
      <div className={styles.title}>
        <p>Media</p>
        <button onClick={() => null}>
          <GrAdd />
        </button>
      </div>
      <div className={styles.list}>
        {files.map((file) => (
          <>
            <div id={file.id} className={styles.card}>
              {/* <div className={styles.container}>
              <img src={file.src} alt={file.filename} />
            </div> */}
              <div className={styles.footer}>
                <div className={styles.left}>
                  <p>{file.title}</p>
                  <p>{file.uploadedDate.toDateString()}</p>
                </div>
                <div className={styles.right}>
                  <button className={styles.edit}>
                    <BsPencil />
                  </button>
                  <button className={styles.delete}>
                    <HiOutlineTrash />
                  </button>
                </div>
              </div>
              {/* <div className={styles.selection}>
                <input type="checkbox" />
                <label>Select</label>
              </div> */}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Media;
