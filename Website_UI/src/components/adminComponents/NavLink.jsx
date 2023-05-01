import clsx from "clsx";
import * as React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({
  children,
  className,
  onClick,
  to
}) {
  return (
    <RouterNavLink
      activeClassName="bg-gray-50 text-gray-900"
      className={clsx(
        "flex items-center font-bold rounded-xl px-4 py-4 text-gray-500 no-underline  ",
        className
      )}
      onClick={onClick}
      to={to}
      
    >
      {children}
    </RouterNavLink>
  );
}
