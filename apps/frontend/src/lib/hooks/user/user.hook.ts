import type { UseUserOutput } from "./user.type";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "#/lib/utils/supabase";

export function useUser(): UseUserOutput {
  const router = useRouter();

  const [user, setUser] = useState<UseUserOutput>("loading");

  useEffect(() => {
    const getUser = async(): Promise<void> => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) return router.push("/");

      setUser(user);
    };

    getUser();
  }, []);

  return user;
}