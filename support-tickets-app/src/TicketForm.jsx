import React, { useState } from 'react';
import axios from 'axios';

export default function TicketForm({ token, onCreated }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/tickets', { title }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    onCreated(res.data);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter ticket title" />
      <button type="submit">Create Ticket</button>
    </form>
  );
}
