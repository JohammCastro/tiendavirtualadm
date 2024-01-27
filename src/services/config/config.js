
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://gsvojdznflgbjykopqre.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdzdm9qZHpuZmxnYmp5a29wcXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzOTg5NjAsImV4cCI6MjAxOTk3NDk2MH0.8HbzntFYhNYJBiOqsqkgXy_vPHkjLT9eBEzs-HpV6H8')