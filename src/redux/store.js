"use client";

import { configureStore } from "@reduxjs/toolkit";
import BlogListReducer from "./slices/BlogList";
import BlogListDetailReducer from "./slices/BlogListDetail";
import ServiceListReducer from "./slices/ServiceList";
import ServiceListDetailReducer from "./slices/ServiceListDetail";

export const store = configureStore({
  reducer: {
    BlogListData: BlogListReducer,
    BlogListDetailData: BlogListDetailReducer,
    ServiceListData: ServiceListReducer,
    ServiceListDetailData: ServiceListDetailReducer,
  },
});
