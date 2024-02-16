import React from "react";
import "./bundle.css";

const AccountShell = () => {
  const AccountComponent = React.lazy(() => import("./bundle"));

  return (
    <>
      <AccountComponent />
    </>
  );
};

export default AccountShell;