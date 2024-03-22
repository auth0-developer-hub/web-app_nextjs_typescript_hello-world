import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

interface MobileNavBarTabProps {
  path: string;
  label: string;
}

export const MobileNavBarTab: React.FC<MobileNavBarTabProps> = ({
  path,
  label,
}) => {
  const pathname = usePathname();
  const isRouteActive = (path: string) => pathname === path;

  let mobileNavBarTabClassName = "mobile-nav-bar__tab";

  if (isRouteActive(path)) {
    mobileNavBarTabClassName += " mobile-nav-bar__tab--active";
  }

  return (
    <Link href={path} className={mobileNavBarTabClassName}>
      <div>{label}</div>
    </Link>
  );
};
