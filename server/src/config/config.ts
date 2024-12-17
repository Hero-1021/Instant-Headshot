import * as dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

interface Config {
  ASTRIA_AI_API_KEY: string; // Your DeepAI API Key
  BASE_URL: string;        // DeepAI API Base URL
}

const config: Config = {
  ASTRIA_AI_API_KEY: process.env.ASTRIA_AI_API_KEY || '',
  BASE_URL: 'https://api.astria.ai',
};

// Check if the API key is missing
if (!config.ASTRIA_AI_API_KEY) {
  console.error('Error: ASTRIA_AI_API_KEY is not defined. Please check your .env file.');
}

export default config;
