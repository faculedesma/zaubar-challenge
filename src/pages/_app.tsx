import { useState } from "react";
import Layout from "@/components/layout";
import FilterContext, { defaultFilters } from "@/contexts/FiltersContext";
import type { AppType, AppProps } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.scss";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  const [filters, setFilters] = useState(defaultFilters);

  return (
    <Layout>
      <FilterContext.Provider value={{ filters, setFilters }}>
        <Component {...pageProps} />;
      </FilterContext.Provider>
    </Layout>
  );
};

export default trpc.withTRPC(App);
