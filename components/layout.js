import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 dark:bg-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}
