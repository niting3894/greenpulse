import { BASE_API_URL, TOKEN_NAME } from "@/until";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

export const getBlogListDetail = createAsyncThunk(
  "BlogListDetail",
  async ({ id }) => { // Destructure to directly use `id`
    const cookie = new Cookies();
    const token = cookie.get(TOKEN_NAME);

    const setup = await axios({
      method: "get",
      headers: {
        Accept: "/",
        "Content-Type": "application/json",
        Authorization: token,
      },
      url: `${BASE_API_URL}blogs?id=${id}`, // Use `id` directly here
    }).then((res) => res.data.data);
    return setup;
  }
);

const BlogListDetail = createSlice({
  name: "BlogListDetail",
  initialState: {
    BlogListDetail: "",
    loadingDetail: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogListDetail.pending, (state) => {
        state.loadingDetail = true;
      })
      .addCase(getBlogListDetail.fulfilled, (state, action) => {
        state.BlogListDetail = action.payload;
        state.loadingDetail = false;
      })
      .addCase(getBlogListDetail.rejected, (state) => {
        state.loadingDetail = false;
      });
  },
});


export default BlogListDetail.reducer;
