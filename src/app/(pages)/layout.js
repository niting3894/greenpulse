"use client";

import Footer from "@/components/Footer";
import Header from "@/components/header";

const PageLayout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default PageLayout;
