import { BASE_API_URL, TOKEN_NAME } from "@/until";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

export const getserviceListDetail = createAsyncThunk(
  "ServiceListDetail",
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
      url: `${BASE_API_URL}services/?slug=${id}`, // Use `id` directly here
    }).then((res) => res.data.data);
    return setup;
  }
);

const ServiceListDetail = createSlice({
  name: "ServiceListDetail",
  initialState: {
    ServiceListDetail: "",
    loadingDetail: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getserviceListDetail.pending, (state) => {
        state.loadingDetail = true;
      })
      .addCase(getserviceListDetail.fulfilled, (state, action) => {
        state.ServiceListDetail = action.payload;
        state.loadingDetail = false;
      })
      .addCase(getserviceListDetail.rejected, (state) => {
        state.loadingDetail = false;
      });
  },
});


export default ServiceListDetail.reducer;
