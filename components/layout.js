import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
