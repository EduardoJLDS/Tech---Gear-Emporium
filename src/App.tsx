import React from "react";
import "./global.scss";
import Header from "./layout/header/Header";
import Body from "./layout/body/Body";
import Footer from "./layout/footer/Footer";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      <ToastContainer />
    </>
  );
}
