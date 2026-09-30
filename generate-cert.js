const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const certPath = path.join(__dirname, 'certs');

// Create certs directory if it doesn't exist
if (!fs.existsSync(certPath)) {
  fs.mkdirSync(certPath, { recursive: true });
}

const keyPath = path.join(certPath, 'key.pem');
const certFilePath = path.join(certPath, 'cert.pem');

// Check if certificates already exist
if (fs.existsSync(keyPath) && fs.existsSync(certFilePath)) {
  console.log('✓ SSL certificates already exist in ./certs/');
  process.exit(0);
}

// Generate self-signed certificate (valid for 365 days)
console.log('Generating self-signed SSL certificate...');

try {
  execSync(
    `openssl req -x509 -newkey rsa:2048 -keyout "${keyPath}" -out "${certFilePath}" -days 365 -nodes -subj "/CN=localhost"`,
    { stdio: 'inherit' }
  );
  console.log('✓ SSL certificate generated successfully!');
  console.log(`✓ Key: ${keyPath}`);
  console.log(`✓ Certificate: ${certFilePath}`);
} catch (error) {
  console.error('Error generating certificate:', error.message);
  console.log('\nManual alternative (macOS/Linux):');
  console.log('openssl req -x509 -newkey rsa:2048 -keyout certs/key.pem -out certs/cert.pem -days 365 -nodes -subj "/CN=localhost"');
  process.exit(1);
}
