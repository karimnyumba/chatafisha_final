import clsx from "clsx";
import * as React from "react";

export default function IconButton({ children, className, onClick }) {
    return (
      <button
        className={clsx(
          "inline-flex items-center justify-center rounded-full p-3 hover:bg-gray-100",
          className
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
;
