"use client";

import type { ReactElement } from "react";
import { UnveiledBtn } from "#/lib/components/molecules/unveiled-button";
import { useUser } from "#/lib/hooks/user";
import Link from "next/link";

export default function Profile(): ReactElement {
  const user = useUser();

  if (user === "loading") return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>User Profile</h2>
      <div>{user.email}</div>
      <div>Last Signed In:</div>
      <code>{user.last_sign_in_at ? new Date(user.last_sign_in_at).toUTCString() : "Aucune date"}</code>

      <Link href="/">
        <UnveiledBtn>Go Home</UnveiledBtn>
      </Link>
    </div>
  );
}