import React, { useState } from "react";

import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { Footer } from "../components/Footer";
import { SideNav } from "../components/SideNav";

const MainLayout = ({
  buttonUrl,
  getRandomMeal,
  handleChange,
  searchString,
  setSearchString,
  getSearchResults,
  setSearchResults,
  children,
}) => {
  const [showNav, setShowNav] = useState(false);

  const links = ["categories", "contact"];
  const footerLinks = [...links, "random"];

  const openNavClick = (ev) => {
    ev.preventDefault();
    setShowNav(true);
    document.addEventListener("keydown", handleEscKey);
    // document.addEventListener("click", handleOutsideClick);
  };

  const closeNavClick = (ev) => {
    ev.preventDefault();
    setShowNav(false);
    document.removeEventListener("keydown", handleEscKey);
  };

  const handleEscKey = (ev) => {
    if (ev.key === "Escape") {
      setShowNav(false);
    }
  };
  // const handleOutsideClick = ev => {
  //   console.log(ev);
  // };

  return (
    <>
      <header>
        <Navbar
          handleClick={getRandomMeal}
          buttonUrl={buttonUrl}
          openNavClick={openNavClick}
          links={links}
        />

        <SearchBar
          searchString={searchString}
          setSearchString={setSearchString}
          handleChange={handleChange}
          onSubmit={getSearchResults}
          setSearchResults={setSearchResults}
        />
        <SideNav
          showNav={showNav}
          closeNavClick={closeNavClick}
          links={links}
          buttonUrl={buttonUrl}
        />
      </header>
      {children}
      <Footer links={[...links, "random"]} />
    </>
  );
};

export default MainLayout;
