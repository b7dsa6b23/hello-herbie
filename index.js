const http = require('http');
const now = new Date();

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Hello Herbie</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
    h1 { color: #333; }
    .time { color: #666; font-size: 1.2em; }
    .note { background: #f0f0f0; padding: 15px; border-radius: 8px; margin-top: 20px; }
  </style>
</head>
<body>
  <h1>👋 Hello from Herbie's Codex!</h1>
  <p class="time">Server time: ${now.toISOString()}</p>
  <div class="note">
    <strong>✅ Auto-updating preview!</strong><br>
    This page auto-updates when new code is pushed to GitHub.<br>
    <em>Last updated: ${new Date().toISOString()}</em>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
  console.log(`   Time: ${now.toISOString()}`);
});
