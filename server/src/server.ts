import express from "express";
import cors from "cors";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import {connectDB} from "./config/db"

dotenv.config();

const app = express();
connectDB();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.get('/health', (_, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on ${PORT}`));

