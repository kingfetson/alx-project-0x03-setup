import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "../../interface";
import { FaHome } from 'react-icons/fa';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
