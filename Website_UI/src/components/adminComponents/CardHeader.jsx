import clsx from "clsx";
import * as React from "react";
import Typography from "./Typography";


export default function CardHeader({ className, title }) {
  return (
    <div className={clsx("pt-4 px-4", className)}>
      <Typography as="div" variant="h3">
        {title}
      </Typography>
    </div>
  );
}
