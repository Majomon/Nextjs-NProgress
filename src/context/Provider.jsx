"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function Provider({ children }) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}

export default Provider;
