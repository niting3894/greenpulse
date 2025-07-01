import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ContactUsApi = async (payload) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  return await response.json();
};

export const getBlogList = createAsyncThunk(
  "BlogList",
  async (obj, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/blogs`, {
        params: {
          page: obj?.page,
          limit: obj?.limit,
          search: obj?.search,
        },
      });

      return {
        data: response.data.data,
        count: response.data.count,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch data");
    }
  }
);
