import express from 'express';
import Ticket from '../models/Ticket.js';
import axios from 'axios';
import authMiddleware from '../middlewares/auth.js';

const ticketRouter = express.Router();

// GET /api/tickets
ticketRouter.get('/', authMiddleware(), async (req, res) => {
  const tickets = await Ticket.find({ customerId: req.user.customerId });
  res.json(tickets);
});

// POST /api/tickets
ticketRouter.post('/', authMiddleware(), async (req, res) => {
  const { title } = req.body;

  const ticket = await Ticket.create({
    title,
    createdBy: req.user.id,
    customerId: req.user.customerId
  });
console.log('Triggering n8n webhook...');
  // Send to n8n
  try {
    
    await axios.post('http://n8n:5678/webhook-test/mark-done', {
      ticketId: ticket._id,
      customerId: req.user.customerId
    });
  } catch (err) {
    console.log('Failed to trigger n8n:', err.message);
  }

  res.status(201).json(ticket);
});

export default ticketRouter;
