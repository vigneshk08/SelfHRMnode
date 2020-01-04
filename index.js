const express = require('express');
var cors = require('cors');
const expressSanitizer = require('express-sanitizer');
const candidate = require('./components/candidate');
const app = express();

const corsOptions = {
  exposedHeaders: 'authorization',
};

app.use(cors(corsOptions))
app.use(express.json());
app.use(expressSanitizer());

app.use('/candidate', candidate);

const server = app.listen(3000, (req, res) => {
  console.log('Server Running on port 3000');
})

module.exports = server;