import axios from "axios";

import { BE_URL } from "../utils/constants";

export const getAllTours = async () => {
  try {
    const res = await axios({
      url: `${BE_URL}/tours`,
      method: "GET",
    });

    return res.data.data;
  } catch (err) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};

export const getMyTours = async (token) => {
  if (!token) return {};

  try {
    const res = await axios({
      url: `${BE_URL}/bookings/myTours`,
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return res.data.data;
  } catch (err) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};
