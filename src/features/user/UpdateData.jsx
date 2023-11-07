import SecondaryHeading from "../../UI/SecondaryHeading";
import FormUpdateUser from "./FormUpdateUser";

function UpdateData() {
  return (
    <div className="user-view__content">
      <div className="user-view__form-container">
        <SecondaryHeading>Your account settings</SecondaryHeading>
        <FormUpdateUser />
      </div>
    </div>
  );
}

export default UpdateData;
