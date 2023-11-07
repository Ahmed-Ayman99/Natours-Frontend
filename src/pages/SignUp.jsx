import { useEffect } from "react";
import SignupForm from "../features/authuntication/SignupForm";
import SecondaryHeading from "../UI/SecondaryHeading";

const SignUp = () => {
  useEffect(() => {
    document.title = "Login Natours";

    return () => {
      document.title = "Natours | All Tours";
    };
  }, []);

  return (
    <div className="login-form">
      <SecondaryHeading>Log into your account</SecondaryHeading>
      <SignupForm />
    </div>
  );
};

export default SignUp;
