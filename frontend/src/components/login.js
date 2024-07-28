import React, { useState } from 'react';
import './login.css'; // Import CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setError('Please fill in both fields.');
      return;
    }

    // Construct the payload
    const payload = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        alert(data.message || 'Login successful!');
        // Optionally handle token storage
        // localStorage.setItem('token', data.token);
        // Navigate to another page if needed
      } else {
        const data = await response.json();
        alert(data.message || 'Login failed.');
        setError(data.message || 'Invalid credentials');
      }

      // Clear the form
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Failed to login. Please try again.');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
