// Configuración de conexión a Supabase
const SUPABASE_URL = 'https://dtqwwpskztchtsetvhfw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0cXd3cHNrenRjaHRzZXR2aGZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5NjA0MjksImV4cCI6MjEwNDUzNjQyOX0.sXggVarAzb1swMW707UDNTnfojETJCx3XYasKCxbwCI';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
