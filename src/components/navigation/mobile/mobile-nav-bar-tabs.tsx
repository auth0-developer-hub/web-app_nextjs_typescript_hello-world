import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";
import { useUser } from "@auth0/nextjs-auth0/client";

export const MobileNavBarTabs: React.FC = ({}) => {
  const { user } = useUser();

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab path="/profile" label="Profile" />
      <MobileNavBarTab path="/public" label="Public" />
      {user && (
        <>
          <MobileNavBarTab path="/protected" label="Protected" />
          <MobileNavBarTab path="/admin" label="Admin" />
        </>
      )}
    </div>
  );
};
