const express = require('express');

const mongoose = require('mongoose');

const app = express();

const items = require('./routes/api/items');

//Body parser middleware
app.use(express.json());

//DB configs
db = require('./config/keys.js').mongoURI;

//DB connection

mongoose.connect(db,{useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('Mongo Connected')).catch( err => console.log(err));

// Use Routes
app.use('/api/items',items);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port - ${port}`));
