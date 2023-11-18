const fs = require('fs');
const path = require('path');
const http = require('http');
const say = require('say');

const localServerOptions = {
  hostname: 'localhost',
  port: 5000,
  path: '/story.txt',
  method: 'GET',
};

const publicFolderPath = path.join(__dirname, 'node_server', 'public');
const audioFilePath = path.join(publicFolderPath, 'story.mp3');

if (!fs.existsSync(publicFolderPath)) {
  fs.mkdirSync(publicFolderPath);
}

const req = http.request(localServerOptions, (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    say.export(data, 'Microsoft David Desktop - English (United States)', 1, audioFilePath, (err) => {
      if (err) {
        console.error('Error:', err);
      } else {
        console.log(`Audio file saved to: ${audioFilePath}`);
      }
    });
  });
});

req.on('error', (error) => {
  console.error('Error fetching text file:', error);
});

// End the request.
req.end();