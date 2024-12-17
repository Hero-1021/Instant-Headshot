import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import {imageRouter} from "./routes/image.route"
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the server!');
});


app.use('/api', imageRouter)
app.use((req: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, async () => {
  try {
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }
});
