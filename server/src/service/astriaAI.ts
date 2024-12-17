import axios from 'axios';
import config from '../config/config';
import supabase from '../config/supabaseClient';

export const generateHeadshot = async (text: string): Promise<void> => {
  console.log(`${config.BASE_URL}/v1/generate-image`)
  try {
    const response = await axios.post(
      `${config.BASE_URL}/generate-image`,  
      {
        prompt: text
      },
      {
        headers: {
          'Authorization': `Bearer ${config.ASTRIA_AI_API_KEY}`, 
          'Content-Type': 'application/json',
        },
      }
    );

    
    const imageUrl = response.data.imageUrl;  
    console.log(response.data);

    // const { data, error } = await supabase.from('headshots').insert([{ user_id: userId, headshot_url: headshotUrl }]);

    console.log('Generated Image URL:', imageUrl);
  } catch (error: any) {
    console.error('Error generating image:', error.message);
    throw new Error('Failed to generate image');
  }
};
