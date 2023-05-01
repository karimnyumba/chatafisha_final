import clsx from "clsx";
import * as React from "react";


export default function TableRow({ children, className }) {
  return <tr className={clsx("text-sm font-syne", className)}>{children}</tr>;
}
