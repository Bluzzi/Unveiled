import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseURL) throw new Error("Environment variable NEXT_PUBLIC_SUPABASE_URL undefined.");
if (!supabaseKey) throw new Error("Environment variable NEXT_PUBLIC_SUPABASE_ANON_KEY undefined.");

export const supabase = createClient(supabaseURL, supabaseKey);