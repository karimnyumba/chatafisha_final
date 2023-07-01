import clsx from "clsx";
import * as React from "react";
import Typography from "./Typography";


export default function CardHeader({ className, title, children }) {
  return (
    <div className={clsx(`pt-4 px-4  text-white rounded-lg`, className)}>
      
     {children}
    </div>
  );
}
