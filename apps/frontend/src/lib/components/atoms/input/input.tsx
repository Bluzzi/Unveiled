import type { InputProps } from "./input.type";
import type { ReactElement } from "react";
import { forwardRef } from "react";
import { clsx } from "clsx";

export const Input = forwardRef<HTMLInputElement, InputProps>((
  { variant, className, ...props }, ref
): ReactElement => {
  const styles = clsx(
    "w-full pl-12 pr-3 py-2",
    "outline-none border focus:border-indigo-600",
    "shadow-sm rounded-lg",
    {
      "bg-primary text-white": variant === "primary",
      "bg-transparent text-black": variant === "secondary"
    },
    className
  );

  return (
    <input
      ref={ref}
      className={styles}
      {...props}
    />
  );
});

Input.displayName = "Input";