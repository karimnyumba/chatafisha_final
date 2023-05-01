import clsx from "clsx";
import * as React from "react";


export default function PageHeader({
  children,
  className,
  extra
}) {
  return (
    <div className={clsx("flex items-center justify-between", className)}>
      {children}
      {extra}
    </div>
  );
}
