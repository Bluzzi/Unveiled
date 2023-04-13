import type { PropsWithChildren, ReactElement } from "react";
import { Card } from "#/lib/components/atoms/card";
import Image from "next/image";
import logoFull from "~/logo-full.png";

export default function Rules({ children }: PropsWithChildren): ReactElement {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-16">
      <Image src={logoFull} alt="logo" />

      <Card className="flex items-center justify-center max-w-3xl w-11/12">
        <div className="w-fit flex flex-col items-center gap-4">
          {children}
        </div>
      </Card>
    </div>
  );
}