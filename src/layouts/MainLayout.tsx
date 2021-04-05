import React, { FC, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { SideNav } from "../components/SideNav";

const MainLayout: FC = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  const openNavClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setShowNav(true);
    document.addEventListener("keydown", handleEscKey);
  };

  const closeNavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowNav(false);
    document.removeEventListener("keydown", handleEscKey);
  };

  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
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
