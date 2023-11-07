// export const BE_URL = "http://localhost:8080/api";
// export const BE_URL_img = "http://localhost:8080/assets";

export const BE_URL =
  "https://natours-backend-production-c4b1.up.railway.app/api";
export const BE_URL_img =
  "https://natours-backend-production-c4b1.up.railway.app/assets";

export const settings = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
