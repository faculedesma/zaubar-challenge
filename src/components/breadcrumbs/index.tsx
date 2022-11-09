import Link from "next/link";
import { useRouter } from "next/router";
import { SlArrowRight } from "react-icons/sl";
import { foldersMock } from "../../constants/folders";
import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const router = useRouter();

  const { id } = router.query;
  const folder = foldersMock.find((folder) => folder.id === id);

  return (
    <div className={styles.breadcrumbs}>
      <Link href="/media">Home</Link>
      <SlArrowRight />
      {folder?.breadcrumbs.map((breadId) => (
        <>
          <Link
            key={breadId}
            href={{
              pathname: "/media/[id]",
              query: { id: breadId },
            }}
          >
            {foldersMock.find((folder) => breadId === folder.id)?.name}
          </Link>
          <SlArrowRight />
        </>
      ))}
      {folder?.name || "All"}
    </div>
  );
};

export default Breadcrumbs;
