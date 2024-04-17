const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const router = require('./routes/routes');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', router)



const PORT = process.env.PORT || 3000   


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


//password pfoWbOXFIVt8Tug5
//username abisakyn