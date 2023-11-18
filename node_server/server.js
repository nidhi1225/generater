const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/download', (req, res) => {
  const publicDir = path.join(__dirname, 'public');
  const filePath = path.join(publicDir, 'story.txt');
  const fileContent = req.body.content || 'Default story content...';

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(filePath, fileContent);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath, {
      headers: {
        'Content-Disposition': 'attachment; filename=story.txt'
      }
    });

  } else {
    res.status(500).send('Internal Server Error: File not found');
  }
});

app.use('/api/story', require('./routes/storyRoutes'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
