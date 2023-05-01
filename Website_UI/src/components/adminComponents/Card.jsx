import clsx from "clsx";
import * as React from "react";



export default function Card({ children, className }) {
  return (
    <div className={clsx("rounded-xl shadow-sm bg-white", className)}>
      {children}
    </div>
  );
}
