import React from 'react';

export default function TicketList({ tickets }) {
  return (
    <ul>
      {tickets.map(t => (
        <li key={t._id}>
          {t.title} - <strong>{t.status}</strong>
        </li>
      ))}
    </ul>
  );
}
