import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../layout/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-Background bg-cover">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
