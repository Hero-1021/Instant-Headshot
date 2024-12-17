import { Request, Response } from 'express'
import { generateHeadshot } from '../service/astriaAI';

export const text2img = async (req: Request, res: Response): Promise<void> => {
  const inputText = req.body.inputText;
  if (!inputText) {
    res.status(400).json({ error: 'Text is required for image generation.' });
  }
  try {
    const result = await generateHeadshot(inputText);


  } catch (error: any) {
    console.error('Error in /api/generate-headshot:', error.message);
    res.status(500).json({ error: 'Failed to generate headshot.' });
  }

}
