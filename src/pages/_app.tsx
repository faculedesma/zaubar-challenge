import type { AppType, AppProps } from "next/app";
import { trpc } from "../utils/trpc";
import Layout from "@/components/layout";
import "../styles/globals.scss";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
};

export default trpc.withTRPC(App);
