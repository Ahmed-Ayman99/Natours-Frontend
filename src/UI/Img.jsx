import { BE_URL_img } from "../utils/constants";

const Img = ({ src, className, alt }) => {
  return <img src={`${BE_URL_img}/${src}`} className={className} alt={alt} />;
};

export default Img;
