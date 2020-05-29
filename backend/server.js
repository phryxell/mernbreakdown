const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config(); //Environment variables in dotenv-file

// Express-server
const app = express();
const port = process.env.PORT || 5000;

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));
  
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../build', 'index.html'))
    });
    
  }

//Middleware
app.use(cors());
app.use(express.json()); //BodyParser included in new version of Express. Used to parse JSON

// Connect to db (MongoDB Atlas)
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    );

const connection = mongoose.connection;
connection.once('open', () => { // Once the connection is open => log connection
    console.log("MongoDB database connection established succesfully");
})

const breakdownsRouter = require('./routes/breakdowns');
const usersRouter = require('./routes/users');

app.use('/breakdowns', breakdownsRouter);
app.use('/users', usersRouter);

// Start listening to server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});