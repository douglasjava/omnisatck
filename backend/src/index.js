const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://root:12345@cluster0-dcwrl.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(require('./routes'));

app.listen(3333);
