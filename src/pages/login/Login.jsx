import React, { memo } from "react";
import SignIn from "../../components/sign-in/SignIn";

const Login = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default memo(Login);
