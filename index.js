const express = require("express");
const cors = require('cors');
const SensorRoutes = require('./routes/sensorData.routes');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(cors());
app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
})

app.use('/api', SensorRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
