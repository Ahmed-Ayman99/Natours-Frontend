import { useEffect } from "react";

import SecondaryHeading from "../UI/SecondaryHeading";
import LoginForm from "../features/authuntication/LoginForm";

const Login = () => {
  useEffect(() => {
    document.title = "Login Natours";

    return () => {
      document.title = "Natours | All Tours";
    };
  }, []);

  return (
    <div className="login-form">
      <SecondaryHeading>Log into your account</SecondaryHeading>
      <LoginForm />
    </div>
  );
};

export default Login;
