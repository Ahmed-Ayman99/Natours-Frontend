import axios from "axios";

import { BE_URL } from "../utils/constants";

export const getUserReviews = async (token) => {
  try {
    const res = await axios({
      url: `${BE_URL}/users/my-reviews`,
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
