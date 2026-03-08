import { createClient } from "https://esm.sh/@supabase/supabase-js"

const supabaseUrl = https://ylfsqjbqhewpfiooytlg.supabase.co
const supabaseKey eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsZnNxamJxaGV3cGZpb295dGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NzQwODQsImV4cCI6MjA4ODM1MDA4NH0.Ssl5J6ktZIVtLd2cq8vH7PWdR4-yZwI5tt4PtXkVqWk

export const supabase = createClient(supabaseUrl, supabaseKey)