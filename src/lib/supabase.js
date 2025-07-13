import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ekfucvqycibcdnoltsye.supabase.co' // Ganti dengan URL Supabase kamu
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrZnVjdnF5Y2liY2Rub2x0c3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MTIyNzAsImV4cCI6MjA2Nzk4ODI3MH0.0IMDyZD45ZGJip1Me-OyLrN-PRb6LagoqlHdd9_FdGs'    // Ganti dengan anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
