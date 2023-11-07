import axios from "axios";

import { BE_URL } from "../utils/constants";

export const booktourApi = async (id, token) => {
  try {
    const res = await axios({
      url: `${BE_URL}/bookings/checkout-session/${id}`,
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};
