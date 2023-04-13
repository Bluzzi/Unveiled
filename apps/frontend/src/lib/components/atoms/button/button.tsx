import type { ReactElement } from "react";
import { ButtonProps } from "./button.type";
import { clsx } from "clsx";

export function Button({ size = "base", icon, children, className, ...props }: ButtonProps): ReactElement {
  const styles = clsx(
    "bg-primary-2 text-white text-base",
    "rounded hover:shadow-md shadow-primary-2",
    "flex items-center justify-center gap-2",
    {
      "py-2 px-3": size === "small",
      "py-3 px-5": size === "base" || size === "full-width",
      "w-full": size === "full-width"
    },
    className
  );

  return <button className={styles} {...props}>{icon} {children}</button>;
}