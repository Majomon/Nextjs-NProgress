"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function Provider({ children }) {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#85586c"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
}

export default Provider;
