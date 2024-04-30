const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const app = express();

// Connect to MongoDB (Cloud)
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
