import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FilterContext from "@/contexts/FiltersContext";
import { GrAdd } from "react-icons/gr";
import { HiOutlineTrash } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";
import Folders from "../folders";
import Filters from "../filters";
import Breadcrumbs from "../breadcrumbs";
import styles from "./Media.module.scss";

const Media = ({ media }) => {
  const [files, setFiles] = useState(media?.files);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const { filters } = useContext(FilterContext);
  const router = useRouter();
  const folderId = router.query.id;

  const applyFilters = () => {
    const selectedTypes = filters.filetypes
      .filter((type) => type.selected)
      .map((filetype) => filetype.id);
    const filtered = files?.filter(
      (file) =>
        (file.filename.includes(filters.search) || !filters.search) &&
        (selectedTypes.includes(file.type) || !selectedTypes.length)
    );
    return sortByDate(filtered);
  };

  const sortByDate = (filtered) => {
    return filtered?.sort((fileOne, fileTwo) => {
      return filters.date === "newest"
        ? Number(fileTwo.uploadedDate) - Number(fileOne.uploadedDate)
        : Number(fileOne.uploadedDate) - Number(fileTwo.uploadedDate);
    });
  };

  useEffect(() => {
    setFiles(files);
    setFilteredFiles(applyFilters());
  }, [filters, folderId]);

  return (
    <>
      <Filters />
      <Breadcrumbs folders={media?.folders} />
      <Folders folders={media?.folders} />
      <div className={styles.media}>
        <div className={styles.title}>
          <p>Media</p>
          <button onClick={() => null}>
            <GrAdd />
          </button>
        </div>
        <div
          className={`${
            filters.view === "gallery" ? styles.gallery : styles.list
          }`}
        >
          {filteredFiles?.map((file) => (
            <>
              <div key={file.id} id={file.id} className={styles.card}>
                {/* <div className={styles.container}>
                  <img src={file.src} alt={file.filename} />
                </div> */}
                <div className={styles.footer}>
                  <div className={styles.left}>
                    <p>{file.title}</p>
                    <p>{file.createdAt}</p>
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
    </>
  );
};

export default Media;
