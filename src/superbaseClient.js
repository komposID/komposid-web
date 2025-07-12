// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iepgyqsprvhwibwibkhu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcGd5cXNwcnZod2lid2lia2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyOTk1NDksImV4cCI6MjA2Nzg3NTU0OX0.1xEfdpkQKBPNHlzxJJJO6yntfQtXfvVGXVyBTzp3R68'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
