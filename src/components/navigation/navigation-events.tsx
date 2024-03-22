import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface NavigationEventsProps {
  closeMobileMenu: () => void;
}

export const NavigationEvents: React.FC<NavigationEventsProps> = ({
  closeMobileMenu,
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, searchParams]);

  return null;
};
