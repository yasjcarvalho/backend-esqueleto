const express = require('express');
const usuarioRouter = require('./usuarioRouter');

const database = require('./db');

const app = express();
app.use(express.json());

app.use('/usuarios', usuarioRouter);

app.listen(3000, async () => {
    const resultDb = await database.sync({ alter: true });
    console.log('server started');
})