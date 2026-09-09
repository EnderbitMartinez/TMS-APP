// Configuración de conexión a Supabase
const SUPABASE_URL = 'https://dtqwwpskztchtsetvhfw.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'sb_publishable_ibFRbll0lV6bcqelIZfY0g_Z3RLYyuz';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
