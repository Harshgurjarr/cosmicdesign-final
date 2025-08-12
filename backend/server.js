require('dotenv').config();  
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');


const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello from Vajrakayay backend!');
});


app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


app.use(express.static(path.join(__dirname, '../frontend')));


mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
