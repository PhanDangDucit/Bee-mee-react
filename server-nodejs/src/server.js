import express from 'express';
import { config } from 'dotenv';
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import { ConnectMongo } from './configs/mongo.config';
import { routes } from './routes/index.route';
config();
const app = express();
import createError from "http-errors";
import getConnectionMysql from './configs/mysql.config';
import cookieParser from "cookie-parser";


/**
 * Connect database
 */
getConnectionMysql();
ConnectMongo();

/**
 * Middleware
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
})); // security
app.use(cors()); // cross-origin
app.use(compression());
app.use(cookieParser())

/**
 * routing
 */
routes(app);

/**
 * Handle errors
 */
app.use((req, res, next) => {
    next(createError.NotFound("This page does not found!"));
})

app.use((err, req, res, next) => {
    return res.json({
        status: err.status,
        message: err.message
    })
});

/**
 * Port
 */
const PORT = process.env.PORT || 4444;

app.listen(`${PORT}`, () => {
    console.log('listening on port:>>', PORT);
})