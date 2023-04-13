"use client";

import type { ReactElement } from "react";
import { Button, ButtonProps } from "#/lib/components/atoms/button";
import { FiCopy } from "react-icons/fi";
import { clsx } from "clsx";


export function UnveiledBtn({ className, ...props }: ButtonProps): ReactElement {


  return (
    <Button icon={<FiCopy />} className={clsx("font-mono", className)} {...props}>

    </Button>
  );
}