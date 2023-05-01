import clsx from "clsx";
import * as React from "react";



export default function Nav({
  children,
  orientation = "horizontal"
}) {
  return (
    <nav
      className={clsx(
        "flex flex-wrap",
        orientation === "vertical" && "flex-col"
      )}
    >
      {children}
    </nav>
  );
}
