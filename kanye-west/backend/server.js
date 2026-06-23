const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config({ path: '../.env' });

const app = express();
app.use(cors({ origin: ['http://127.0.0.1:5173', 'http://localhost:5173', 'https://kanye-west-tau.vercel.app'] }));
app.use(express.json());

const CLIENT_ID = process.env.VITE_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = process.env.VITE_SPOTIFY_REDIRECT_URI;
const usedCodes = new Set();

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  console.log('CODE:', code);
  console.log('REDIRECT_URI being sent:', REDIRECT_URI);
  console.log('CLIENT_ID:', CLIENT_ID);
  console.log('CLIENT_SECRET exists:', !!CLIENT_SECRET);

  if (!code) return res.status(400).json({ error: 'No code provided' });
  if (usedCodes.has(code)) return res.status(400).json({ error: 'Code already used' });
  usedCodes.add(code);

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const { access_token, refresh_token, expires_in } = response.data;
    res.json({ access_token, refresh_token, expires_in });
  } catch (err) {
    res.status(500).json({ error: 'Token exchange failed', details: err.message });
  }
});

app.get('/refresh', async (req, res) => {
  const refresh_token = req.query.refresh_token;
  if (!refresh_token) return res.status(400).json({ error: 'No refresh token' });

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    res.json({ access_token: response.data.access_token });
  } catch (err) {
    res.status(500).json({ error: 'Refresh failed', details: err.message });
  }
});

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));