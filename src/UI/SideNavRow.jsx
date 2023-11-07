import { Link, useSearchParams } from "react-router-dom";

const SideNavRow = ({ to, children }) => {
  const [searchParams] = useSearchParams();

  const filterData = !searchParams.get("data")
    ? "update-date"
    : searchParams.get("data");

  return (
    <li className={filterData === to ? "side-nav--active" : ""}>
      <Link to={`?data=${to}`}>{children}</Link>
    </li>
  );
};

export default SideNavRow;
