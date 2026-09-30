# TikTok Booster - HTTPS Web Application

A modern, secure HTTPS web application built with Node.js, Express, and vanilla JavaScript.

## Features

✨ **HTTPS Encrypted** - Secure end-to-end encryption  
⚡ **Fast** - Built with Node.js and Express  
📱 **Responsive** - Mobile-friendly design  
🛠️ **Modern Stack** - Latest web technologies  
🔒 **Secure** - Self-signed SSL certificates for development  

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenSSL (for certificate generation)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LuisStyle2359/tiktokbooster.git
   cd tiktokbooster
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate SSL certificates**
   ```bash
   npm run generate-cert
   ```
   This creates self-signed certificates in the `certs/` directory (valid for 365 days).

4. **Start the server**
   ```bash
   npm start
   ```

   The server will run at: **https://localhost:3443**

## Development Mode

For development with auto-restart on file changes:

```bash
npm run dev
```

This requires `nodemon` (included in devDependencies).

## Project Structure

```
tiktokbooster/
├── server.js              # Main Express HTTPS server
├── generate-cert.js       # SSL certificate generator
├── package.json           # Dependencies and scripts
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── certs/                # SSL certificates (generated)
│   ├── key.pem          # Private key
│   └── cert.pem         # Certificate
└── public/               # Static files
    ├── index.html        # Main HTML page
    ├── styles.css        # Styling
    └── script.js         # Client-side JavaScript
```

## API Endpoints

### GET /api/health
Check server status and connection health.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### POST /api/data
Send data to the server.

**Request:**
```json
{
  "message": "Your message here"
}
```

**Response:**
```json
{
  "success": true,
  "received": "Your message here",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Environment Variables

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

**Available variables:**
- `PORT` - Server port (default: 3443)
- `NODE_ENV` - Environment mode (development/production)

## SSL/TLS Certificate

### Self-Signed Certificate (Development)

The included certificate generator creates self-signed certificates valid for 365 days:

```bash
npm run generate-cert
```

### Production Certificates

For production, replace the self-signed certificates with proper certificates from:
- [Let's Encrypt](https://letsencrypt.org/)
- [Certbot](https://certbot.eff.org/)
- Your certificate provider

Place certificates in the `certs/` directory:
- `certs/key.pem` - Private key
- `certs/cert.pem` - Certificate

## Browser Security Warning

When accessing `https://localhost:3443`, your browser will show a security warning because the certificate is self-signed. This is normal for development. To bypass:

- **Chrome/Edge**: Click "Advanced" → "Proceed to localhost (unsafe)"
- **Firefox**: Click "Advanced..." → "Accept the Risk and Continue"
- **Safari**: Click "Show Details" → "Visit this website"

## Troubleshooting

### Certificate Issues
```bash
# Regenerate certificates
npm run generate-cert
```

### Port Already in Use
```bash
# Use a different port
PORT=3444 npm start
```

### CORS Issues
Check the `cors()` middleware in `server.js` for allowed origins.

## Security Considerations

⚠️ **Development Only**
- Self-signed certificates are for development only
- Not suitable for production use
- Browsers will warn about security

✅ **Best Practices**
- Use Let's Encrypt certificates in production
- Implement proper authentication
- Add HTTPS headers (HSTS, etc.)
- Keep dependencies updated
- Use environment variables for secrets

## Future Enhancements

- [ ] User authentication (JWT)
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] WebSocket support
- [ ] Rate limiting
- [ ] Logging system
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Production deployment guide

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Support

For issues and questions, please create an issue on the GitHub repository.

---

🔒 **Stay Secure!** Always use HTTPS in production.
