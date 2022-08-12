import React from "react";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={
        {
          /*         display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center", */
        }
      }
    >
      <div>{children}</div>
    </div>
  );
};

export default Layout;
