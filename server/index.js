const express = require('express');
const cors = require('cors');
const conn = require('./db/connect');
const userRoutes = require('./routes/user');
const app = express();
const port = 8080;

conn();

app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.listen(port, () => console.log("tudo OK!"));