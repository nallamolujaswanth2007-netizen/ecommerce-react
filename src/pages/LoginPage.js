import React, { useState } from 'react';

export default function LoginPage({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log(isLogin ? 'Login' : 'Register', { email, password });
    // For now, just navigate to home
    onNavigate('home');
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--cream)',
    padding: '2rem',
  };

  const formStyle = {
    background: 'white',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const titleStyle = {
    fontFamily: 'var(--font-display)',
    fontSize: '2rem',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: '2rem',
    color: 'var(--ink)',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    marginBottom: '1rem',
    border: '1px solid var(--cream3)',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.2s',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    background: 'var(--ink)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background 0.2s',
  };

  const toggleStyle = {
    textAlign: 'center',
    marginTop: '1.5rem',
    fontSize: '0.9rem',
    color: 'var(--ink2)',
  };

  const linkStyle = {
    color: 'var(--ink)',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 style={titleStyle}>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>

        <div style={toggleStyle}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            style={linkStyle}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </span>
        </div>
      </form>
    </div>
  );
}