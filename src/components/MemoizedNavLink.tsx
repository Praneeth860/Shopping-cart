import { memo } from "react";
import { NavLink } from "react-router-dom";

const MemoizedNavLink = memo(
  ({ to, children }: { to: string; children: React.ReactNode }) => {
    return (
      <li className="navbar-item">
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          {children}
        </NavLink>
      </li>
    );
  }
);

export default MemoizedNavLink;
