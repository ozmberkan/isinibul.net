import { createClient, UserResponse } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);


export const signUp = async (email: string, password: string) => {
    return await supabase.auth.signUp({ email, password });
  };

  export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const getUser = async (): Promise<UserResponse> => {
  return await supabase.auth.getUser();
};
