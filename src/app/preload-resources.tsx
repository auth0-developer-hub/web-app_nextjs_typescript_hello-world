"use client";

import ReactDOM from "react-dom";
import React from "react";

export function PreloadResources() {
  ReactDOM.preconnect("https://fonts.googleapis.com");
  ReactDOM.preconnect("https://fonts.gstatic.com", {
    crossOrigin: "anonymous",
  });

  return null;
}
