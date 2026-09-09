// Configuración de conexión a Supabase
const SUPABASE_URL = 'https://dtqwwpskztchtsetvhfw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ibFRbl10lV6bcqeLIZfY0g_Z3RLYyuz';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
