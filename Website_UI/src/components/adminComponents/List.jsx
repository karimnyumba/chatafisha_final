import clsx from "clsx";
import * as React from "react";


export default function List({ children, className }) {
  return <div className={clsx("flex flex-col", className)}>{children}</div>;
}
