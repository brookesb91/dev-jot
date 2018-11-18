const express = require('express');
const http = require('http');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();
const server = http.Server(app);

app.use('/', express.static(path.join(__dirname, 'dist/dev-jot')));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/dev-jot/index.html')));

server.listen(port, () => console.log(`Application Running On Port ${port}`));