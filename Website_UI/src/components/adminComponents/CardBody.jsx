import clsx from "clsx";
import * as React from "react";



export default function CardBody({ children, className }) {
  return <div className={clsx("p-4", className)}>{children}</div>;
}
