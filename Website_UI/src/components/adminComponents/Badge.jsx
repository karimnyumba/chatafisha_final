import clsx from "clsx";
import React from "react";


const colors = {
  error: "bg-red-100 text-red-700",
  primary: "bg-blue-100 text-blue-700",
  success: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700"
};

export default function Badge({
  children,
  className,
  color = "primary"
}) {
  return (
    <div
      className={clsx(
        "inline-block font-bold text-xs rounded-full px-3 py-2",
        colors[color],
        className
      )}
    >
      {children}
    </div>
  );
}
