import clsx from "clsx";
import * as React from "react";



export default function Page({ children, className }) {
  return <div className={clsx("p-6", className)}>{children}</div>;
}
