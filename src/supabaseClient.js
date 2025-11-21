import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://thxohmhvyvrppuyscias.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoeG9obWh2eXZycHB1eXNjaWFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MTQyNzAsImV4cCI6MjA3OTI5MDI3MH0.sgEpL6HGoEo4iv0ONjTWi6tmdvjT_0OVxUhjc5_XHAo';

export const supabase = createClient(supabaseUrl, supabaseKey);


