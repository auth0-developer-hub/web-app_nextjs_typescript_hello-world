import React from "react";
import { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "Auth0 Next.js Sample",
  description:
    "Learn how to add user authentication to Next.js web apps easily.",
  icons: [
    {
      rel: "shortcut icon mask-icon",
      color: "#000000",
      url: "https://cdn.auth0.com/website/auth0_favicon.svg",
    },
    {
      rel: "shortcut icon",
      url: "https://cdn.auth0.com/website/new-homepage/dark-favicon.png",
    },
  ],
};
