import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Auth({ onAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    let result;
    if (isSignup) {
      result = await supabase.auth.signUp({ email, password });
      if (result.error) {
        setError(result.error.message);
      } else {
        setError(
          "Signup successful! Please check your inbox and confirm your email before logging in."
        );
      }
    } else {
      result = await supabase.auth.signInWithPassword({ email, password });
      if (result.error) {
        setError(result.error.message);
      } else {
        onAuth && onAuth();
      }
    }
  };

  return (
    <div className="auth-box">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <button onClick={() => setIsSignup(!isSignup)}>
        {isSignup ? "Go to Login" : "Create new account"}
      </button>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </div>
  );
}

export default Auth;
