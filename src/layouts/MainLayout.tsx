import React, { FC, useState } from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { SideNav } from "../components/SideNav";
import { MealSummary } from "../types/meal";

type Props = {
  getRandomMeal: () => void;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<
    React.SetStateAction<{ meals: MealSummary[] }>
  >;
};
const MainLayout: FC<Props> = ({
  getRandomMeal,
  searchString,
  setSearchString,
  setSearchResults,
  children,
}) => {
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
