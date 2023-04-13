import type { ReactElement } from "react";
import { DividerProps } from "./divider.type";
import { clsx } from "clsx";

export function Divider({ text, textPosition = "middle", className, ...props }: DividerProps): ReactElement {
  const styles = clsx("block bg-gray h-1 w-full rounded", className);

  if (text) {
    if (textPosition === "top-left") return (
      <>
        <p className="text-gray">{text}</p>
        <span className={styles} {...props} />
      </>
    );

    if (textPosition === "middle") return (
      <span className={clsx("flex items-center gap-3", className)}>
        <Divider />
        <p className="text-gray">{text}</p>
        <Divider />
      </span>
    );
  }

  return <span className={styles} {...props} />;
}