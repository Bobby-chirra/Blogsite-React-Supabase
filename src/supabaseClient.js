import { createClient } from '@supabase/supabase-js';

// use these for local purposes
// const supabaseUrl = 'your_supabase_url';
// const supabaseKey = 'your_anon_key'

// use these when deploying your site:

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);