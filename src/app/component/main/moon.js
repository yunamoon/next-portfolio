"use client";
import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/moon";

export default function Moon() {
  return <Lottie loop animationData={lottieJson} play />;
}
