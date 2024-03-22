"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

interface NavBarTabProps {
  path: string;
  label: string;
}

export const NavBarTab: React.FC<NavBarTabProps> = ({ path, label }) => {
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;

  let navBarTabClassName = "nav-bar__tab";

  if (isRouteActive(path)) {
    navBarTabClassName += " nav-bar__tab--active";
  }

  return (
    <Link href={path} className={navBarTabClassName}>
      {label}
    </Link>
  );
};
