import Img from "../../UI/Img";

const OverviewBox = ({ guide }) => {
  const { photo, role, name } = guide;

  return (
    <div className="overview-box__detail">
      <Img src={`/users/${photo}`} className="overview-box__img" alt={name} />

      <span className="overview-box__label">{role}</span>
      <span className="overview-box__text">{name}</span>
    </div>
  );
};

export default OverviewBox;
