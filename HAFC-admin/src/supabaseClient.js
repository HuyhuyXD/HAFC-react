// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mjhzbhtwutvhzzmrbyig.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qaHpiaHR3dXR2aHp6bXJieWlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MzAzMTAsImV4cCI6MjA2MjAwNjMxMH0.99y0plc2j1fXXejVY0b6lOVaGgUj4R_1cClM971bGtU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
