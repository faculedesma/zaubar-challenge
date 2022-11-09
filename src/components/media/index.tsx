import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FilterContext from "@/contexts/FiltersContext";
import { GrAdd } from "react-icons/gr";
import { HiOutlineTrash } from "react-icons/hi";
import { BsPencil } from "react-icons/bs";
import Folders from "../folders";
import Filters from "../filters";
import Breadcrumbs from "../breadcrumbs";
import { filesDefault } from "../../constants/filesDefault";
import styles from "./Media.module.scss";

const Media = () => {
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const { filters } = useContext(FilterContext);
  const router = useRouter();
  const folderId = router.query.id;

  const getFilesFolder = (filesList) => {
    const filesByFolder = folderId
      ? filesList.filter((file) => file.folderId === folderId)
      : filesList;
    const filtered = applyFilters(filesByFolder);
    const sorted = sortByDate(filtered);
    return applyFilters(sorted);
  };

  const sortByDate = (filesList) => {
    return filesList.sort((fileOne, fileTwo) => {
      return filters.date === "newest"
        ? Number(fileTwo.uploadedDate) - Number(fileOne.uploadedDate)
        : Number(fileOne.uploadedDate) - Number(fileTwo.uploadedDate);
    });
  };

  const applyFilters = (filesList) => {
    const selectedTypes = filters.filetypes
      .filter((type) => type.selected)
      .map((filetype) => filetype.id);
    return filesList.filter(
      (file) =>
        (file.filename.includes(filters.search) || !filters.search) &&
        (selectedTypes.includes(file.type) || !selectedTypes.length)
    );
  };

  useEffect(() => {
    // fetch all files
    const allFiles = filesDefault;
    const filesByFolder = getFilesFolder(allFiles);
    setFiles(allFiles);
    setFilteredFiles(filesByFolder);
  }, [filters, folderId]);

  return (
    <>
      <Filters />
      <Breadcrumbs />
      <Folders />
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
          {filteredFiles.map((file) => (
            <>
              <div key={file.id} id={file.id} className={styles.card}>
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
    </>
  );
};

export default Media;
