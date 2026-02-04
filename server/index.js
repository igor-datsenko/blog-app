import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes)

app.get('/ping', (req, res) => res.send('Hello World!'));

 async function start() {
    await connectDB();
    await app.listen(port, () =>
     console.log(`Server is running on port ${port}`)
    );
 }

async function connectDB() {
    const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zvcetbr.mongodb.net/${process.env.DB_NAME}?appName=Cluster0`

    await mongoose.connect(url, {})
}

start();