"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function Provider({ children }) {
  return (
    <>
      <ProgressBar
        height="6px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}

export default Provider;
