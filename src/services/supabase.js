import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bhnkttrygzvxenpsklqk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJobmt0dHJ5Z3p2eGVucHNrbHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4NTY4MzEsImV4cCI6MjAyNjQzMjgzMX0.ZSI5qhO_vrlh4tn36aIVbOGhRF8FsJi5pN0lV_2Dww4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
