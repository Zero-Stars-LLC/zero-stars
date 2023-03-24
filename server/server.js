const express = require('express');
const app = express();
const path = require('path');
// const apiRouter = require('./routes/api.js');

const PORT = 3000;






app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
