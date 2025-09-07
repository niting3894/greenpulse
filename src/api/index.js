import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { BASE_API_URL, TOKEN_NAME } from "../until";
import axios from "axios";
var querystring = require("querystring");

export default async function handler(req, res) {
  try {
    const response = await fetch('http://www.greenpulsesolution.com/api/v1/pages/contact-us/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err.message });
  }
}


export const patchRawData = async (url = "", data = {}) => {
  try {
    const token = await Cookies.get(TOKEN_NAME);

    const response = await axios.patch(BASE_API_URL + url, data, {
      headers: {
        Authorization: token ? token : "",
      },
    });

    return response.data;
  } catch (error) {
    // toast.error(error.response.data);
    return error.response.data;
  }
};

export const getDummyData = async (url = "", data = {}) => {
  try {
    const token = await Cookies.get(TOKEN_NAME);

    const response = [
      {
        _id: "66e1a3a440354005274db5fc",
        title: "nitt",
        message: "rggregewgwerrweewg",
        type: 2,
        selectedUsers: [
          "sumit",
          "test",
          "Demo",
          "sumit",
          "test",
          "Demo",
        ],
        status: "sent",
        createdAt: "2024-09-11T14:05:24.115Z",
        updatedAt: "2024-09-11T14:05:24.115Z",
        __v: 0,
      },
      {
        _id: "66e1a30d40354005274db5ef",
        title: "abhi",
        message: "dsgsadgasg",
        type: 1,
        status: "draft",
        createdAt: "2024-09-11T14:02:53.253Z",
        updatedAt: "2024-09-11T14:02:53.253Z",
        __v: 0,
      },
      {
        _id: "66e19ebf40354005274daaab",
        title: "vikas",
        message: "fghdfhdfhsdh",
        type: 2,
        selectedUsers: [
          "sumit",
          "test",
          "Demo",,
        ],
        status: "sent",
        createdAt: "2024-09-11T13:44:31.729Z",
        updatedAt: "2024-09-11T13:44:31.729Z",
        __v: 0,
      },
    ];

    return response;
  } catch (error) {
    // toast.error(error.response.data);
    return error.response.data;
  }
};

export const getData = async (url = "", data = {}) => {
  try {
    const token = await Cookies.get(TOKEN_NAME);

    const response = await axios.get(BASE_API_URL + url, {
      params: data,
      headers: {
        Authorization: token ? token : "",
      },
    });

    return response.data;
  } catch (error) {
    // toast.error(error.response.data);
    return error.response.data;
  }
};

export const putRawData = async (url = "", data = {}) => {
  try {
    const token = await Cookies.get(TOKEN_NAME);

    const response = await axios.put(BASE_API_URL + url, data, {
      headers: { Authorization: token ? token : "" },
    });

    return response.data;
  } catch (error) {
    // toast.error(error.response.data);
    return error.response.data;
  }
};

export const deleteRawData = async (url = "", data = {}) => {
  try {
    const token = await Cookies.get(TOKEN_NAME);

    const response = await axios.delete(BASE_API_URL + url, {
      data,
      headers: {
        Authorization: token ? token : "",
      },
    });

    return response.data;
  } catch (error) {
    // toast.error(error.response.data);
    return error.response.data;
  }
};

export const DeleteParams = async (url = "", data = {}) => {
  try {
    const token = await Cookies.get(TOKEN_NAME);

    const response = await axios.delete(BASE_API_URL + url, {
      headers: { Authorization: token },
    });

    return response.data;
  } catch (error) {
    toast.error(error.response.data);
    return error.response.data;
  }
};