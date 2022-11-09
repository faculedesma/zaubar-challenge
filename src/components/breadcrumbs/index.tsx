import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = ({ folders }) => {
  console.log(folders);
  // useEffect(() => {
  //   getBreadcrumbs();
  // }, [folderId]);

  // const getBreadcrumbs = () => {
  //   const parentId = selectedFolder?.parentId;
  //   const breads = [];

  //   const findRecursive = (id) => {
  //     const parentFolder = folders?.find((folder) => folder.id === id);
  //     if (parentFolder) {
  //       breads.push(parentFolder.id);
  //       findRecursive(parentFolder.parentId);
  //     }
  //     return;
  //   };

  //   findRecursive(parentId);
  //   setBreadcrumbs(breads.reverse());
  // };
  // const breadcrumbs = JSON.parse(folders?.[0].breadcrumbs);
  // const currentFolder = breadcrumbs[breadcrumbs.length - 1];

  return (
    <div className={styles.breadcrumbs}>
      <Link href="/media">Home</Link>
      <SlArrowRight />
      {/* {breadcrumbs?.map((bread) => (
        <>
          <Link
            key={bread.id}
            href={{
              pathname: "/media/[id]",
              query: { id: bread.id },
            }}
          >
            {folders.find((folder) => folder.id === bread.id)?.name}
          </Link>
          <SlArrowRight />
        </>
      ))}
      {breadcrumbs ? currentFolder?.name : "All"} */}
      All
    </div>
  );
};

export default Breadcrumbs;
