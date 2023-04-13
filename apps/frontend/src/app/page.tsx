"use client";

import type { ReactElement } from "react";
import { Button } from "#/lib/components/atoms/button";
import { Card } from "#/lib/components/atoms/card";
import { Divider } from "#/lib/components/atoms/divider";
import { Input } from "#/lib/components/atoms/input";
import { FiBook } from "react-icons/fi";
import Image from "next/image";
import logoFull from "~/logo-full.png";

export default function HomePage(): ReactElement {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-16">
      <Image src={logoFull} alt="logo" />

      <Card className="flex items-center justify-center max-w-3xl w-11/12">
        <div className="w-fit flex flex-col items-center gap-4">
          <p className="text-white text-2xl text-center">Welcome, what you want to do ?</p>

          <div className="w-full flex gap-2 items-center justify-between">
            <Input placeholder="Code of the party" />
            <Button className="w-28">Join</Button>
          </div>

          <Divider text="or" textPosition="middle" />

          <Button size="full-width">Create a game</Button>

          <Divider text="or" textPosition="middle" />

          <Button size="full-width" icon={<FiBook />}>Read the rules</Button>
        </div>
      </Card>
    </div>
  );
}