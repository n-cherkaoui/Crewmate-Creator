import { createClient } from '@supabase/supabase-js'
const URL = 'https://ezbegvnwudbdwwafhoah.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6YmVndm53dWRiZHd3YWZob2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMTkzNzgsImV4cCI6MjAxNDU5NTM3OH0.osxB5-xBAz4VHyH9RVtyzrGM-tOmEkFCwWw6y5_44bU';
export const supabase = createClient(URL, API_KEY);