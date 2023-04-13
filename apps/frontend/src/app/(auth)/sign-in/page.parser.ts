import { z } from "zod";

const requiredError = { required_error: "This field is required" };

export const SignInFormParser = z.object({
  email: z.string(requiredError).email("Enter a valid email"),
  password: z.string(requiredError).min(1, "Password is required")
});

export type SignInForm = z.infer<typeof SignInFormParser>;