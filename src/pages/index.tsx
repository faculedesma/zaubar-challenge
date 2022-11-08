import Header from "@/components/header";
import Filters from "@/components/filters";
import Folders from "@/components/folders";
import Media from "@/components/media";
import styles from "../styles/App.module.scss";
import { trpc } from "../utils/trpc";

export default function Home() {
  return (
    <div className={styles.app}>
      <Header />
      <Filters />
      <Folders />
      <Media />
    </div>
  );
}
