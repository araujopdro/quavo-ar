const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Serve static files FIRST
app.use(express.static(path.join(__dirname, 'public')));

// 2. API route
app.get('/api/data', (req, res) => {
  res.json({ 
    message: 'Hello from the server!',
    timestamp: new Date().toISOString()
  });
});

// 3. Catch-all route LAST (only for HTML5 history mode)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});