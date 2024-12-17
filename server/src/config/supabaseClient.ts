import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

interface Config {
    SUPABASE_URL: string; // Your DeepAI API Key
    SUPABASE_KEY: string;        // DeepAI API Base URL
}


const config: Config = {
    SUPABASE_URL: process.env.SUPABASE_URL || '',
    SUPABASE_KEY: process.env.SUPABASE_KEY || ''
};

if (!config.SUPABASE_URL || !config.SUPABASE_KEY) {
    throw new Error('Supabase URL and KEY must be set in environment variables.');
}

// Initialize Supabase client
const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_KEY);

export default supabase;
