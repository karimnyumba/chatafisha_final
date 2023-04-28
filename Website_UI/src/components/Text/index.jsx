import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[37.11px] md:text-[43.11px] text-[47.11px]",
  h2: "font-medium sm:text-[30.240000000000002px] md:text-[32.24px] text-[34.24px]",
  h3: "font-bold text-2xl md:text-[22px] sm:text-xl",
  h4: "text-xl",
  h5: "font-medium text-[18.38px]",
  h6: "text-base",
  body1: "font-semibold text-[15px]",
  body2: "text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
