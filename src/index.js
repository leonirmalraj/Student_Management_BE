import express from "express";
import AppRoutes from './routes/index.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const app = express();
const PORT = 3000;
app.use(cors(
    {
        origin: 'http://localhost:5173/', // Allow requests from this origin
        optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
    }
))
app.use(express.json())
app.use('/', AppRoutes)

app.listen(PORT, () => console.log(`App is listening port ${PORT}`));
