import clsx from "clsx";
import * as React from "react";


export default function TableBody({ children, className }) {
  return (
    <tbody className={clsx("bg-white divide-y divide-gray-200 font-syne", className)}>
      {children}
    </tbody>
  );
}
