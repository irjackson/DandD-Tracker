const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())


if (process.env.NODE_ENV === 'production') {
app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) =>{
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
})
}

app.listen(PORT, () =>{
  console.log("Listening on port: " + PORT);
})
