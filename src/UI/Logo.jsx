import { Link } from "react-router-dom";

import Img from "./Img";

const Logo = () => {
  return (
    <Link to="/allTours">
      <Img src={`/logo-green.png`} alt="Natour logo" />;
    </Link>
  );
};

export default Logo;
