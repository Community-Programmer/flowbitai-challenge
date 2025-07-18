import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  title: String,
  status: { type: String, default: 'Open' },
  createdBy: String,
  customerId: String
});

export default mongoose.model('Ticket', TicketSchema);
