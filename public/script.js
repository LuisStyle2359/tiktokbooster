// Check server status on page load
document.addEventListener('DOMContentLoaded', () => {
  checkServerStatus();
  setupEventListeners();
});

function setupEventListeners() {
  const sendBtn = document.getElementById('sendBtn');
  const messageInput = document.getElementById('messageInput');

  sendBtn.addEventListener('click', sendMessage);
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

async function checkServerStatus() {
  const statusContent = document.getElementById('statusContent');
  
  try {
    const response = await fetch('/api/health');
    const data = await response.json();
    
    if (response.ok) {
      statusContent.innerHTML = `
        <p><strong>✓ Server Status:</strong> Online</p>
        <p><strong>Protocol:</strong> HTTPS (Secure)</p>
        <p><strong>Timestamp:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
        <p><strong>Connection:</strong> Encrypted & Secure</p>
      `;
      statusContent.classList.remove('error');
    }
  } catch (error) {
    statusContent.innerHTML = `
      <p><strong>✗ Server Status:</strong> Offline</p>
      <p>Error: ${error.message}</p>
    `;
    statusContent.classList.add('error');
  }
}

async function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const responseBox = document.getElementById('response');
  const message = messageInput.value.trim();

  if (!message) {
    alert('Please enter a message');
    return;
  }

  try {
    const response = await fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    responseBox.classList.add('show');
    responseBox.innerHTML = `
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;

    messageInput.value = '';
  } catch (error) {
    responseBox.classList.add('show');
    responseBox.innerHTML = `
      <pre>Error: ${error.message}</pre>
    `;
  }
}

// Refresh status every 30 seconds
setInterval(checkServerStatus, 30000);
