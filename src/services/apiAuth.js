import axios from "axios";

import { BE_URL } from "../utils/constants";

export const logInApi = async (email, password) => {
  try {
    const res = await axios({
      url: `${BE_URL}/users/login`,
      data: { email, password },
      method: "POST",
    });

    const data = res.data;
    localStorage.setItem("natours_user", JSON.stringify(data));

    return data;
  } catch (err) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};

export const getUser = async (token) => {
  if (!token) return null;

  try {
    const res = await axios({
      url: `${BE_URL}/users/me`,
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

export const logoutApi = async () => {
  try {
    const res = await axios({
      url: `${BE_URL}/users/logout`,
      method: "GET",
    });

    localStorage.removeItem("natours_user");

    return res.data;
  } catch (err) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};

export const SignupApi = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      url: `${BE_URL}/users/signup`,
      method: "POST",
      data: { name, email, password, passwordConfirm },
    });

    const data = res.data;
    localStorage.setItem("natours_user", JSON.stringify(data));

    return data;
  } catch (err) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};

export const updatePasswordApi = async (data, token) => {
  try {
    const res = await axios({
      url: `${BE_URL}/users/updatepassword`,
      data,
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    localStorage.setItem("natours_user", JSON.stringify(res.data));

    return res.data;
  } catch (err) {
    throw new Error(err?.response?.data?.message || err.message);
  }
};
