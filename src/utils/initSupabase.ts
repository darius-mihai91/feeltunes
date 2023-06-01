/* eslint-disable import/no-unresolved */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from "@env";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
});

export default supabase;
