import { BASE_API_URL, TOKEN_NAME } from "@/until";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

export const getBlogList = createAsyncThunk(
  "BlogList",
  async (obj, { rejectWithValue }) => {
    const cookie = new Cookies();
    const token = cookie.get(TOKEN_NAME);

    try {
      const response = await axios({
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        url: `${BASE_API_URL}blogs?page=${obj?.page}&limit=${obj?.limit}&search=${obj?.search}`,
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


const BlogList = createSlice({
  name: "BlogList",
  initialState: {
    BlogList: [],
    loadingBlog: false,
    totalCount: 0, 
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogList.pending, (state) => {
        state.loadingBlog = true;
        state.error = null;
      })
      .addCase(getBlogList.fulfilled, (state, action) => {
        state.BlogList = action.payload.data;
        state.totalCount = action.payload.count;
        state.loadingBlog = false;
      })
      .addCase(getBlogList.rejected, (state, action) => {
        state.loadingBlog = false;
        state.error = action.payload;
      });
  },
});


export default BlogList.reducer;
