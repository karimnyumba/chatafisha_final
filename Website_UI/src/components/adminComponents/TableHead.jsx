import clsx from "clsx";
import * as React from "react";



export default function TableHead({ children, className }) {
  return (
    <thead className={clsx("text-sm bg-gray-50 text-gray-500 font-syne", className)}>
      {children}
    </thead>
  );
}
