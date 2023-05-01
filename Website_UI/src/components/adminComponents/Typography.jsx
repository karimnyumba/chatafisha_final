import clsx from "clsx";
import * as React from "react";


const variants= {
  h1: "font-semibold text-xl font-syne",
  h2: "font-semibold font-syne",
  h3: "font-semibold font-syne",
  h4: "font-semibold font-syne"
};

export default function Typography({
  as,
  bold,
  children,
  className,
  muted,
  small,
  smaller,
  variant = "div"
}) {
  const Component = as || variant;
  return (
    <Component
      className={clsx(
        variants[variant],
        bold && "font-semibold ",
        muted && "text-gray-600",
        small && "text-sm",
        smaller && "text-xs",
        className,
        'font-syne'

      )}
    >
      {children}
    </Component>
  );
}
