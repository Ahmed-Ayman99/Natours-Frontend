import useUser from "../authuntication/useUser";
import Img from "../../UI/Img";

const UserData = () => {
  const { user } = useUser();
  const { photo, name } = user;

  return (
    <figure className="nav__el-user">
      <Img
        className="nav__user-img"
        src={`/users/${photo}`}
        alt={`Photo of ${name}`}
      />

      <span>{user?.name.split(" ")[0]}</span>
    </figure>
  );
};

export default UserData;
