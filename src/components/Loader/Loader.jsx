"use client";
import React from "react";
import { Bars, Audio, Circles, CirclesWithBar, ThreeCircles  } from "react-loader-spinner";

function Loader(props) {
  return (
    <>
      <ThreeCircles
         height={props.height ? props.height : "30"}
        width="80"
        color={props.color ? props.color : "#fff"}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="justify-center"
        visible={true}
      />
    </>
  );
}

export default Loader;
