import { useState } from "react";
import { useLocation } from "react-router";

function useMobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const { pathname, search } = useLocation();

  function updateMobileNavState() {
    setIsMobileNavOpen((isMobileNavOpen) => !isMobileNavOpen);
  }

  function closeMobileNav() {
    setIsMobileNavOpen(false);
  }

  const currentUrl = pathname + search;
  const [lastUrl, setLastUrl] = useState(currentUrl);

  if (currentUrl !== lastUrl) {
    setLastUrl(currentUrl);
    setIsMobileNavOpen(false);
  }

  return { isMobileNavOpen, updateMobileNavState, closeMobileNav };
}

export { useMobileNav };
