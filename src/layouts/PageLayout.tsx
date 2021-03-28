import { FC } from "react";

type Props = {
  title: string;
};

const PageLayout: FC<Props> = ({ title, children }) => (
  <div className="container">
    <h1 className="logo">{title}</h1>
    {children}
  </div>
);

export default PageLayout;
