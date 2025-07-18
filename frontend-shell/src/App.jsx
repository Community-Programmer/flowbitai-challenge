import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './App.css';

const SupportTicketsApp = React.lazy(() => import('support_tickets/App'));

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [screens, setScreens] = useState([]);
  const [activeScreen, setActiveScreen] = useState('');

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:5000/api/me/screens', {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => {
        setScreens(res.data);
      });
    }
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setToken(res.data.token);
  };

  if (!token) {
    return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>FlowBitAI Login</h2>
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
    );
  }

  return (
<div className="app-container">
    <div className="sidebar">
      <Sidebar screens={screens} onSelect={setActiveScreen} />
    </div>
    <div className="main-content">
      <React.Suspense fallback="Loading...">
        {activeScreen === 'support-tickets' && <SupportTicketsApp />}
      </React.Suspense>
    </div>
  </div>
  );
}

export default App;
