import { BASE_API_URL, TOKEN_NAME } from "@/until";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

export const getServiceList = createAsyncThunk(
  "ServiceList",
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
        url: `${BASE_API_URL}services?page=${obj?.page}&limit=${obj?.limit}&search=${obj?.search}`,
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


const ServiceList = createSlice({
  name: "ServiceList",
  initialState: {
    ServiceList: [],
    loadingService: false,
    totalCount: 0, 
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServiceList.pending, (state) => {
        state.loadingService = true;
        state.error = null;
      })
      .addCase(getServiceList.fulfilled, (state, action) => {
        state.ServiceList = action.payload.data;
        state.totalCount = action.payload.count;
        state.loadingService = false;
      })
      .addCase(getServiceList.rejected, (state, action) => {
        state.loadingService = false;
        state.error = action.payload;
      });
  },
});


export default ServiceList.reducer;
