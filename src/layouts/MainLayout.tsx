import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { SideNav } from "../components/SideNav";

// TODO FC...
const MainLayout = ({
  getRandomMeal,
  searchString,
  setSearchString,
  setSearchResults,
  children,
}) => {
  const [showNav, setShowNav] = useState(false);

  const openNavClick = (e) => {
    e.preventDefault();
    setShowNav(true);
    document.addEventListener("keydown", handleEscKey);
  };

  const closeNavClick = (e) => {
    e.preventDefault();
    setShowNav(false);
    document.removeEventListener("keydown", handleEscKey);
  };

  const handleEscKey = (e) => {
    if (e.key === "Escape") {
      setShowNav(false);
    }
  };

  return (
    <>
      <header>
        <Navbar handleClick={getRandomMeal} openNavClick={openNavClick} />

        <SearchBar
          searchString={searchString}
          setSearchString={setSearchString}
          setSearchResults={setSearchResults}
        />
        <SideNav
          showNav={showNav}
          closeNavClick={closeNavClick}
          handleClick={() => {}}
        />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
