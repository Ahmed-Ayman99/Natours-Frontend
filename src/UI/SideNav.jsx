import { AiFillStar, AiOutlineSetting } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

import SideNavRow from "./SideNavRow";

const SideNav = () => {
  return (
    <nav className="user-view__menu">
      <ul className="side-nav">
        <SideNavRow to="update-date">
          <AiOutlineSetting />
          Update Data
        </SideNavRow>

        <SideNavRow to="update-password">
          <AiOutlineSetting />
          User Password
        </SideNavRow>

        <SideNavRow to="my-bookings">
          <BsBriefcase />
          My bookings
        </SideNavRow>

        <SideNavRow to="my-reviews">
          <AiFillStar />
          My reviews
        </SideNavRow>
      </ul>
    </nav>
  );
};

export default SideNav;
