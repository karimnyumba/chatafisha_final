import clsx from "clsx";
import * as React from "react";



export default function PageBody({ children, className }) {
  return <div className={clsx("py-6", className)}>{children}</div>;
}
