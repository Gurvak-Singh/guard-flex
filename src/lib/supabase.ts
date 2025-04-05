import { createClient } from '@supabase/supabase-js'

// Hardcoded values for development/deployment testing
// IMPORTANT: In production, these should be proper environment variables
const supabaseUrl = 'https://ybclrmazjomzvlhvtmwa.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliY2xybWF6am9tenZsaHZ0bXdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NDkyNTksImV4cCI6MjA1OTMyNTI1OX0.p2gupZhsh8lTguS14JAS8v8DJujdxnk1BQSxy0fVKHU'

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
