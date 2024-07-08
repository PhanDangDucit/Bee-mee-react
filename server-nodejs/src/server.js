import express from 'express';
import { config } from 'dotenv';
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
config();
const app = express();

/**
 * Middleware
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet()); // security
app.use(cors()); // cross-origin
app.use(compression());

/**
 * Port
 */
const PORT = process.env.PORT || 4444;

app.listen(`${PORT}`, () => {
    console.log('listening on port:>>', PORT);
})