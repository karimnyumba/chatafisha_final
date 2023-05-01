import clsx from "clsx";
import * as React from "react";



const alignments = {
  center: "text-center",
  left: "text-left",
  right: "text-right"
};

export default function TableCell({
  align = "left",
  children,
  className,
  head
}) {
  const Component = head ? "th" : "td";
  return (
    <Component
      className={clsx(
        "px-4 py-3 whitespace-nowrap font-syne",
        alignments[align],
        className
      )}
    >
      {children}
    </Component>
  );
}
