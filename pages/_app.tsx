import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default CustomApp;
