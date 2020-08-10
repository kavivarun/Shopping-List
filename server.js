const express = require('express');

const mongoose = require('mongoose');

const app = express();

const items = require('./routes/api/items');

const path = require('path')

//Body parser middleware
app.use(express.json());

//DB configs
db = require('./config/keys.js').mongoURI;

//DB connection

mongoose.connect(db,{useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('Mongo Connected')).catch( err => console.log(err));
// serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'))

    app.get('*',(req,res) => {
        res.sendfile(path.resolve(__dirname,'client', 'build','index.html'))
    })
}
// Use Routes
app.use('/api/items',items);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port - ${port}`));
