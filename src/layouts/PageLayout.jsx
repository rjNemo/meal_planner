import React from "react";

const PageLayout = ({ title, children }) => {
  return (
    <div className="container">
      <h1 className="logo">{title}</h1>
      {children}
    </div>
  );
};

export default PageLayout;
