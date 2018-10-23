// Node will be the first endpoint which is responsible for routing req to 
// Django server for analysis, and receive response from django

// Get dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// import routes
const data = require('./routes/api/data');

// Initialize the app
const app = express();

// Body Parsers Middleware
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// DB config when needed

// Passport config when needed in the future

// Route api request to routes/api folder
app.use('/api/data', data);


// =============== For Production Purpose ================
// Server static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
//==========================================================

// Get Port
//Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runing on port ${port} at ${Date().toLocaleString()}`  ));