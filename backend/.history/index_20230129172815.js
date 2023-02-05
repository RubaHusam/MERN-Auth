const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();
mongoose.set('strictQuery', false);

// set up server

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT} 😊`));

app.use(express.json()); //apply this function for any request
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000'], //allow frontend access to backend
    credentials: true, //allow the cookie save in origin url
  })
);

// app.get('/test', (req, res) => {
//   res.send('It work');
// });

// connect to mongoDB

mongoose.connect(process.env.MDB_CONNECT, (error) => {
  if (error) return console.error(error);
  console.log('Connected to MongoDB');
});

//  set up routes

app.use('/auth', require('./routers/userRouter'));
app.use('/customer', require('./routers/customerRouter'));
