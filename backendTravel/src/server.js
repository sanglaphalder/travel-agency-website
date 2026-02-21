const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/mongodb');
const authRouter = require('./routes/auth.routes');

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect to DB
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// API routes
app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
    res.send('API Working');
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
