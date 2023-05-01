import clsx from "clsx";
import React from "react";
import Typography from "./Typography";

export default function Input(
  {
    autoComplete,
    className,
    error,
    helper,
    label,
    name,
    onBlur,
    onChange,
    type
  },
  ref
) {
  return (
    <div className={clsx("mb-2", className)}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        autoComplete={autoComplete}
        className={clsx(
          "px-2 py-2 mt-1 focus:border-indigo-500 block w-full border rounded-md",
          error ? "border-red-500" : "border-gray-300"
        )}
        onBlur={onBlur}
        onChange={onChange}
      />
      {helper && (
        <Typography
          className={clsx("mt-1", error ? "text-red-500" : "text-gray-600")}
          smaller
        >
          {helper}
        </Typography>
      )}
    </div>
  );
};
