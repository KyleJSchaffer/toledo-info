require('dotenv').config();
const cors = require('cors');
const express = require("express");
const router = require('./routes');
const path = require('path');

const API_PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
//Serve images from icon folder
app.use('/icons', express.static(path.join(__dirname, 'icons')))
//Router
app.use('/', router);
//Default error handler
app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message })
})


app.listen(API_PORT, () => {
    console.log(`Listening on port ${API_PORT}`);
});