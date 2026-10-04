import { memo } from "react";
import { NavLink } from "react-router-dom";

const SidebarDropdown = ({
  item,
  collapsed,
  openDropdown,
  setOpenDropdown,
  setMobileMenuOpen,
}) => {
  return (
    <div className="sidebar-dropdown">
      <button
        className="sidebar-item"
        onClick={() =>
          setOpenDropdown(openDropdown === item.key ? null : item.key)
        }
      >
        <span className="sidebar-icon">{item.icon}</span>

        {!collapsed && (
          <span className="sidebar-text">
            <strong>{item.title}</strong>
            <small>{item.subtitle}</small>
          </span>
        )}
      </button>

      {!collapsed &&
        openDropdown === item.key &&
        item.subItems?.length > 0 && (
          <div className="sidebar-submenu">
            {item.subItems.map((sub) => (
              <NavLink
                key={sub.key}
                to={sub.path}
                className={({ isActive }) =>
                  `sidebar-subitem ${isActive ? "active" : ""}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {sub.label}
              </NavLink>
            ))}
          </div>
        )}
    </div>
  );
};

export default memo(SidebarDropdown);