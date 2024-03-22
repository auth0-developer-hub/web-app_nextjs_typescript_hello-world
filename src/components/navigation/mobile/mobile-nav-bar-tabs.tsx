import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab";

export const MobileNavBarTabs: React.FC = ({}) => {
  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab path="/profile" label="Profile" />
      <MobileNavBarTab path="/public" label="Public" />
      <MobileNavBarTab path="/protected" label="Protected" />
      <MobileNavBarTab path="/admin" label="Admin" />
    </div>
  );
};
