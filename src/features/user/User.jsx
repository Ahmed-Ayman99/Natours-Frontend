import { useSearchParams } from "react-router-dom";

import UpdatePassword from "./UpdatePassword";
import UserReviews from "./UserReviews";
import SideNav from "../../UI/SideNav";
import UpdateData from "./UpdateData";
import UserTours from "./UserTours";

const User = () => {
  const [searchParams] = useSearchParams();
  const filterData = !searchParams.get("data")
    ? "update-date"
    : searchParams.get("data");

  return (
    <>
      <div className="user-view">
        <SideNav />

        {filterData === "update-date" && <UpdateData />}
        {filterData === "update-password" && <UpdatePassword />}
        {filterData === "my-bookings" && <UserTours />}
        {filterData === "my-reviews" && <UserReviews />}
      </div>
    </>
  );
};

export default User;
