import { AiOutlineUser } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";

import useLogout from "../features/authuntication/useLogout";
import useUser from "../features/authuntication/useUser";
import UserData from "../features/user/UserData";
import ButtonIcon from "./ButtonIcon";
import Img from "./Img";
import { BE_URL_img } from "../utils/constants";

const Header = () => {
  const { isAuthenticated, isLoading } = useUser();

  const { logout, isLogOut } = useLogout();
  const handleLogOut = () => logout();

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link className="nav__el" to="/allTours">
          All tours
        </Link>
      </nav>

      <div className="header__logo">
        <Link to="/">
          <Img src={`/logo-white.png`} alt="Natours logo" />
        </Link>
      </div>

      <nav className="nav nav--user">
        {!isAuthenticated && !isLoading && (
          <>
            <Link className="nav__el" to="/login">
              Log in
            </Link>

            <Link className="nav__el nav__el--cta" to="/signup">
              Sign up
            </Link>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <UserData />

            <ButtonIcon disabled={isLogOut} to="/me">
              <AiOutlineUser />
            </ButtonIcon>

            <ButtonIcon
              disabled={isLogOut}
              className="header__btn"
              onClick={handleLogOut}
            >
              <TbLogout />
            </ButtonIcon>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
