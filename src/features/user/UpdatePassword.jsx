import SecondaryHeading from "../../UI/SecondaryHeading";
import FormUpdatePassword from "./FormUpdatePassword";

function UpdatePassword() {
  return (
    <div className="user-view__content">
      <div className="user-view__form-container">
        <SecondaryHeading>Password change</SecondaryHeading>
        <FormUpdatePassword />
      </div>
    </div>
  );
}

export default UpdatePassword;
