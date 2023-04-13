"use client";

import type { ReactElement } from "react";
import { UnveiledBtn } from "#/lib/components/molecules/unveiled-button/unveiled-button";
import { useRouter } from "next/navigation";
import { Input } from "#/lib/components/atoms/input";
import { useForm } from "react-hook-form";
import { SignInForm, SignInFormParser } from "./page.parser";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInFormSubmit } from "./page.util";

export default function SignIn(): ReactElement {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>({
    resolver: zodResolver(SignInFormParser)
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(data => signInFormSubmit(data, () => router.push("/profile")))}
        className="flex flex-col gap-3"
      >
        <Input
          variant="secondary"
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        {errors.email?.message && <p className="text-red">{errors.email.message}</p>}

        <Input
          variant="secondary"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        {errors.password?.message && <p className="text-red">{errors.password.message}</p>}

        <UnveiledBtn size="large" className="animate-from-bottom">Login</UnveiledBtn>
      </form>
    </div>
  );
}