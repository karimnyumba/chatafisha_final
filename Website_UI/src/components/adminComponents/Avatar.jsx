import clsx from "clsx";
import * as React from "react";



const backgrounds= {
  default: "bg-gray-50",
  paper: "bg-white",
  primary: "bg-blue-500 text-white"
};

export default function Avatar({
  bg = "default",
  children,
  className
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center h-10 w-10 rounded-full",
        backgrounds[bg],
        className
      )}
    >
      {children}
    </div>
  );
}
