"use client";

import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "@/redux/store";
import { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Providers({ children }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Provider store={store}>
      <Suspense>{children}</Suspense>
      <ToastContainer position="top-right" autoClose={3000} />
    </Provider>
  );
}
