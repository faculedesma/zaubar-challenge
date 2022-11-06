import styles from "../styles/Home.module.css";
import { trpc } from "../utils/trpc";

export default function Home() {
  const { data, isLoading } = trpc.hello.useQuery({ text: "Facundo" });

  if (isLoading) return <div>Loading...</div>;

  return <div className={styles.container}>{data?.greeting}</div>;
}
