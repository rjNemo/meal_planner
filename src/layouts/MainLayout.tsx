import { FC, MouseEvent, MouseEventHandler, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { SideNav } from "../components/SideNav";

const MainLayout: FC = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const openNavClick: MouseEventHandler = (e) => {
    e.preventDefault();
    setShowNav(true);
    document.addEventListener("keydown", handleEscKey);
  };

  const closeNavClick = (e: MouseEvent) => {
    e.preventDefault();
    setShowNav(false);
    document.removeEventListener("keydown", handleEscKey);
  };

  const handleEscKey = ({ key }: KeyboardEvent) => {
    if (key === "Escape") {
      setShowNav(false);
    }
  };

  return (
    <>
      <header>
        <Navbar openNavClick={openNavClick} />
        <SearchBar />
        <SideNav showNav={showNav} closeNavClick={closeNavClick} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
