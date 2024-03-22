import "../styles/styles.css";
import React, { PropsWithChildren } from "react";
import { PageLayout } from "@/components/page-layout";
import { siteMetadata } from "@/components/page-head";
import { PreloadResources } from "@/app/preload-resources";

export const metadata = siteMetadata;

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <PreloadResources />
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
};

export default RootLayout;
