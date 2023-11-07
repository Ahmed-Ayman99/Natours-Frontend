import axios from "axios";

import { BE_URL } from "../utils/constants";

export const updateUserApi = async (form, token) => {
  try {
    const res = await axios({
      url: `${BE_URL}/users/updateMe`,
      method: "PATCH",
      data: form,
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return res.data.user;
  } catch (err) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};
