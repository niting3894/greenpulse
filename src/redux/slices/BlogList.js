import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogList = createAsyncThunk(
  "BlogList",
  async (obj, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/blogs", {
        params: {
          page: obj?.page,
          limit: obj?.limit,
          search: obj?.search,
        },
      });

      return {
        data: response.data.details,
        count: response.data.meta_data?.pagination_info?.count || 0,
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
