const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3443;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/data', (req, res) => {
  const { message } = req.body;
  res.json({
    success: true,
    received: message,
    timestamp: new Date().toISOString()
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// HTTPS Server
const certPath = path.join(__dirname, 'certs');
const keyPath = path.join(certPath, 'key.pem');
const certFilePath = path.join(certPath, 'cert.pem');

// Check if certificates exist
if (fs.existsSync(keyPath) && fs.existsSync(certFilePath)) {
  const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certFilePath)
  };

  https.createServer(options, app).listen(PORT, () => {
    console.log(`🔒 HTTPS Server running at https://localhost:${PORT}`);
  });
} else {
  console.error('⚠️  SSL certificates not found!');
  console.log('Run: npm run generate-cert');
  process.exit(1);
}
