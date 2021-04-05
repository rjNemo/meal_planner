import { FC } from "react";

type Props = { title: string };

const PageLayout: FC<Props> = ({ title, children }) => (
  <div className="container">
    <h1 className="logo">{title}</h1>
    <main>{children}</main>
  </div>
);

export default PageLayout;
