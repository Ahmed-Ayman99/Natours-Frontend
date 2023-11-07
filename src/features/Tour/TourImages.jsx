import Img from "../../UI/Img";
import useTour from "./useTour";

const TourImages = () => {
  const { tour } = useTour();
  const { images } = tour;

  return (
    <section className="section-pictures">
      {images.map((img, ind) => (
        <figure key={ind} className="picture-box">
          <Img
            className={`picture-box__img picture-box__img--${ind + 1}`}
            src={`/tours/${img}`}
            alt={img}
          />
        </figure>
      ))}
    </section>
  );
};

export default TourImages;
