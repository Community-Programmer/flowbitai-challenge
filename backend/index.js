
import express  from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import authrouter from './routes/auth.js';
import ticketRouter from './routes/ticket.js';
import webhookRouter from './routes/webhook.js';
import screenRouter from './routes/screen.js';
import cors from 'cors';

config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authrouter);
app.use('/api/tickets', ticketRouter);
app.use('/api/me', screenRouter);
app.use('/webhook', webhookRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(5000, () => console.log("API running on port 5000"));
  })
  .catch(console.error);
