import clsx from "clsx";
import * as React from "react";


export default function Table({ children, className }) {
  return <table className={clsx("min-w-full", className)}>{children}</table>;
}
