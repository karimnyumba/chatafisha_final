import clsx from "clsx";
import * as React from "react";
import Logo from "./Logo";


export default function Loader({ className }) {
  return (
    <div className={clsx("flex justify-center px-4 py-6", className)}>
      <Logo className="animate-pulse text-gray-300" />
    </div>
  );
}
