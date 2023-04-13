"use client";

import type { ReactElement } from "react";
import { Button, LinkButton } from "#/lib/components/atoms/button";
import { Divider } from "#/lib/components/atoms/divider";
import { Input } from "#/lib/components/atoms/input";
import { FiBook } from "react-icons/fi";

export default function HomePage(): ReactElement {
  return (
    <>
      <p className="text-white text-2xl text-center">Welcome, what you want to do ?</p>

      <div className="w-full flex gap-2 items-center justify-between">
        <Input placeholder="Code of the party" />
        <Button className="w-28">Join</Button>
      </div>

      <Divider text="or" textPosition="middle" />

      <Button size="full-width">Create a game</Button>

      <Divider text="or" textPosition="middle" />

      <LinkButton size="full-width" icon={<FiBook />} href="/rules">Read the rules</LinkButton>
    </>
  );
}