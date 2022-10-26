import Link from "next/link";
import { PropsWithChildren } from "react";
import Navigation from "../../Noavigation/Navigation";

const Layout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <>
      <h1> NEXT</h1>
      <Navigation />
      <header>{children}</header>
    </>
  );
};

export default Layout;
