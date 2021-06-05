import { FC } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout: FC<{}> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
