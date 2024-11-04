// Importing modules
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'; 
import connectDB from './config/db.js';


dotenv.config();

connectDB();

const app = express();
app.use(express.json());


app.use('/api/v1/auth', authRoutes);

export default app;
