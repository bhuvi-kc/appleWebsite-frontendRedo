import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signup, login } from '../utils/auth';
import '../App.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const passwordChecks = [
    { label: 'At least 8 characters', valid: password.length >= 8 },
    { label: 'One uppercase letter', valid: /[A-Z]/.test(password) },
    { label: 'One lowercase letter', valid: /[a-z]/.test(password) },
    { label: 'One number', valid: /[0-9]/.test(password) },
  ];

  const allValid = passwordChecks.every(c => c.valid);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!allValid) {
      setError('Password doesn\'t meet all requirements.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords don\'t match.');
      return;
    }

    const signupResult = signup(name, email, password);
    if (!signupResult.success) {
      setError(signupResult.message);
      return;
    }

    login(email, password);
    navigate('/');
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1 className="auth-title">Create Account</h1>
        {error && <p className="auth-error">{error}</p>}
        <input
          className="auth-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <ul className="password-conditions">
          {passwordChecks.map((c, i) => (
            <li key={i} className={c.valid ? 'condition-met' : ''}>
              {c.valid ? '✓' : '○'} {c.label}
            </li>
          ))}
        </ul>

        <input
          className="auth-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button className="auth-button" type="submit">Sign Up</button>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;