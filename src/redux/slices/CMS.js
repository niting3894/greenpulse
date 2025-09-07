import { BASE_API_URL, TOKEN_NAME } from "@/until";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

// Async thunk for fetching CMS data
export const getCms = createAsyncThunk("cms/getCms", async (obj, { rejectWithValue }) => {
  const cookie = new Cookies();
  const token = cookie.get(TOKEN_NAME);

  try {
    const response = await axios({
      method: "get",
      headers: {
        Accept: "/",
        "Content-Type": "application/json",
        Authorization: token,
      },
      url: `${BASE_API_URL}page/cms/?type=${obj?.type}`,
    });
    return response.data.data;
  } catch (error) {
    // Handle errors and reject with a meaningful message
    return rejectWithValue(error.response?.data || "Failed to fetch CMS data");
  }
});

const cmsSlice = createSlice({
  name: "cms",
  initialState: {
    cms: "",
    loadingCMS: false,
    error: null,
  },
  reducers: {}, // Add reducers if needed
  extraReducers: (builder) => {
    builder
      .addCase(getCms.pending, (state) => {
        state.loadingCMS = true;
        state.error = null; // Reset error on new request
      })
      .addCase(getCms.fulfilled, (state, action) => {
        state.cms = action.payload;
        state.loadingCMS = false;
      })
      .addCase(getCms.rejected, (state, action) => {
        state.loadingCMS = false;
        state.error = action.payload; // Store error message
      });
  },
});

export default cmsSlice.reducer;
