import express from "express";
import mongoose from "mongoose";

import { templateRoutes } from './routes/templateRoutes.js';

const app = express();

const PORT = 3000;

(async () => {
  await process.loadEnvFiles('.env');
})();

const mongodb_url = process.env.MONGODB_URL || '';

//Connect to Mongo DB
mongoose.connect( mongodb_url, { 
   useNewUrlParser: true,
   useUnifiedTopology: true 
  })
    .then(() => console.log ('🟢 MongoDB connected'))
    .catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Hello, World!");
})

app.use('/api', templateRoutes);

app.listen(PORT, () => console.log(`✅Server is running on port ${PORT}`));