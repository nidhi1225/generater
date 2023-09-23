
const express = require('express');
const port = 5000;

const app = express();


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/story', require('./routes/storyRoutes'))
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
