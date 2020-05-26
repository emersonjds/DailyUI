import React from "react";
import { Container } from "./styles";
import json from "../../data.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: json,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const PageNotFound = () => (
  <Container>
    <Lottie options={defaultOptions} height="100vh" width="100vw"></Lottie>
    Not Found
  </Container>
);

export default PageNotFound;
