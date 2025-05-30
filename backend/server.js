const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const loginRoutes = require("./routes/login");
const dashboardRoutes = require("./routes/dashboard");
const LaborRoutes = require("./routes/Labor");
const purchase = require("./routes/purchase");
const Inventory = require("./routes/Inventory");
require('dotenv').config(); 

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// MongoDb Connection using .env for the BuildTrack App 
const url = process.env.MONGO_URI;

// Routes
app.use('/login', loginRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/labor', LaborRoutes);
app.use("/procurement", purchase)
app.use("/inventory", Inventory)


// Connect to DB and Start Server at Mongo Db Cluster
mongoose.connect(url)
    .then(() => {
        const PORT = process.env.PORT ;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            console.log('Connected to ConstructionSite database');
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
