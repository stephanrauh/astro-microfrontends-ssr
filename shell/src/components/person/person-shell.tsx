import React from "react";
import "./bundle.css";

const PersonShell = ({ manifest }: any) => {
  const PersonComponent = React.lazy(() => import("./bundle"));

  return (
    <>
      <PersonComponent />
    </>
  );
};

export default PersonShell;