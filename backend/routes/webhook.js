import express from 'express';
import Ticket from '../models/Ticket.js';


const webhookRouter = express.Router();

webhookRouter.post('/ticket-done', async (req, res) => {
  
  const secret = req.headers['x-shared-secret'];
  if (secret !== process.env.SHARED_SECRET) {
    return res.status(403).json({ error: 'Invalid secret' });
  }

  const { ticketId } = req.body;
  await Ticket.findByIdAndUpdate(ticketId, { status: 'Done' });

  res.json({ success: true });
});

export default webhookRouter;
