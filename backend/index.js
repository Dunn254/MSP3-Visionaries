const express = require('express');
const connectDB = require('./utils/db');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');
const errorHandler = require('./middleware/errorMiddleware');
const cors = require('cors');

const app = express();

app.use(cors());

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Listen on a port
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
