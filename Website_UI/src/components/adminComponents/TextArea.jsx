import clsx from "clsx";
import React from "react";
import Typography from "./Typography";


export default 
  function TextArea(
    { className, error, helper, label, name, onBlur, onChange, placeholder }
  ) {
    return (
      <div className={clsx("mb-2", className)}>
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 font-syne"
          >
            {label}
          </label>
        )}
        <textarea
          id={name}
          name={name}
          rows={3}
          required
          className={clsx(
            "focus:border-indigo-500 mt-1 block w-full border rounded-md",
            error ? "border-red-500" : "border-gray-300"
          )}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
        />
        {helper && (
          <Typography
            className={clsx("mt-1", error ? "text-red-500 font-syne" : "text-gray-600 font-syne")}
            smaller
          >
            {helper}
          </Typography>
        )}
      </div>
    );
  }
;
