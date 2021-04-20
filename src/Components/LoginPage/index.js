import React from "react";
import Button from "../Button";

function LoginPage() {
  return (
    <div>
      <Button text="Log In" onClick={() => console.log("click")} />
    </div>
  );
}

export default LoginPage;
