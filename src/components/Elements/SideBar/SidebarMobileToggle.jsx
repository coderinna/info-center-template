import { memo } from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

const SidebarMobileToggle = ({
  isMobile,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  if (!isMobile) return null;

  return (
    <button
      className="mobile-menu-btn"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      {mobileMenuOpen ? <RiMenuFoldLine /> : <RiMenuUnfoldLine />}
    </button>
  );
};

export default memo(SidebarMobileToggle);