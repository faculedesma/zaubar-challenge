import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { foldersMock } from "../../constants/folders";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const router = useRouter();
  const folderId = router.query.id;
  const selectedFolder = foldersMock.find((folder) => folder.id === folderId);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    getBreadcrumbs();
  }, [folderId]);

  const getBreadcrumbs = () => {
    const parentId = selectedFolder?.parentId;
    const breads = [];

    const findRecursive = (id) => {
      const parentFolder = foldersMock.find((folder) => folder.id === id);
      if (parentFolder) {
        breads.push(parentFolder.id);
        findRecursive(parentFolder.parentId);
      }
      return;
    };

    findRecursive(parentId);
    setBreadcrumbs(breads.reverse());
  };

  return (
    <div className={styles.breadcrumbs}>
      <Link href="/media">Home</Link>
      <SlArrowRight />
      {breadcrumbs?.map((id) => (
        <>
          <Link
            key={id}
            href={{
              pathname: "/media/[id]",
              query: { id },
            }}
          >
            {foldersMock.find((folder) => folder.id === id)?.name}
          </Link>
          <SlArrowRight />
        </>
      ))}
      {selectedFolder?.name || "All"}
    </div>
  );
};

export default Breadcrumbs;
