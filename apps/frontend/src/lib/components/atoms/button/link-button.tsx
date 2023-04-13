import { ReactElement } from "react";
import { LinkButtonProps } from "./button.type";
import { clsx } from "clsx";
import Link from "next/link";

export function LinkButton({ size = "base", target = "_self", icon, children, className, ...props }: LinkButtonProps): ReactElement {
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

  return <Link className={styles} target={target} {...props}>{icon} {children}</Link>;
}