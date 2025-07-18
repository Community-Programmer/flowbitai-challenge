import React, { useEffect, useState } from 'react';
import TicketForm from './TicketForm';
import TicketList from './TicketList';
import axios from 'axios';

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [token] = useState(localStorage.getItem('token'));

  useEffect(() => {
    axios.get('http://localhost:5000/api/tickets', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setTickets(res.data));
  }, []);

  const onTicketCreated = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  return (
    <div>
      <h2>Support Tickets</h2>
      <TicketForm token={token} onCreated={onTicketCreated} />
      <TicketList tickets={tickets} />
    </div>
  );
}
