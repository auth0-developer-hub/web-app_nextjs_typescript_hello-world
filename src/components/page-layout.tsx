"use client";

import React, { PropsWithChildren } from "react";
import { NavBar } from "./navigation/desktop/nav-bar";
import { MobileNavBar } from "./navigation/mobile/mobile-nav-bar";
import { PageFooter } from "./page-footer";
import { PageLoader } from "@/components/page-loader";
import { useUser } from "@auth0/nextjs-auth0/client";

export const PageLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">{children}</div>
      <PageFooter />
    </div>
  );
};
