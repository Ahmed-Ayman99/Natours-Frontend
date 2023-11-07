import { AiFillStar, AiOutlineUser, AiTwotoneCalendar } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/BI";

import { formatDate, formatDateNumber } from "../../utils/helpers";
import SecondaryHeading from "../../UI/SecondaryHeading";
import TourOverviewDetails from "./TourOverviewDetails";
import OverviewBox from "./OverviewBox";
import useTour from "./useTour";

const TourDescription = ({ id }) => {
  const { tour } = useTour(id);

  const {
    startDates,
    difficulty,
    maxGroupSize,
    ratingsAverage,
    description,
    guides,
  } = tour;

  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <div className="overview-box__group">
            <SecondaryHeading>Quick facts</SecondaryHeading>

            <TourOverviewDetails
              label="Next date"
              text={formatDate(startDates[0])}
            >
              <AiTwotoneCalendar className="overview-box__icon" />
            </TourOverviewDetails>

            <TourOverviewDetails label="Difficulty" text={difficulty}>
              <BiTrendingUp className="overview-box__icon" />
            </TourOverviewDetails>

            <TourOverviewDetails
              label="Participants"
              text={`${maxGroupSize} people`}
            >
              <AiOutlineUser className="overview-box__icon" />
            </TourOverviewDetails>

            <TourOverviewDetails
              label="Rating"
              text={`${formatDateNumber(ratingsAverage)} / 5`}
            >
              <AiFillStar className="overview-box__icon" />
            </TourOverviewDetails>
          </div>

          <div className="overview-box__group">
            <SecondaryHeading>Your tour guides</SecondaryHeading>

            {guides.map((guide, ind) => (
              <OverviewBox guide={guide} key={ind} />
            ))}
          </div>
        </div>
      </div>

      <div className="description-box">
        <SecondaryHeading>About the park camper tour</SecondaryHeading>

        <p className="description__text">{description.split(/\n/)[0]}</p>
        <p className="description__text">{description.split(/\n/)[1]}</p>
      </div>
    </section>
  );
};

export default TourDescription;
