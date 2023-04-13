import type { SignInForm } from "./page.parser";
import { supabase } from "#/lib/utils/supabase";

export const signInFormSubmit = async(data: SignInForm, successCallback: () => void): Promise<void> => {
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password
  });

  if (error) {
    console.log(error.message);
    return;
  }

  console.log("Login successful!");
  successCallback();
};