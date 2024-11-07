import express from 'express';
import morgan from 'morgan';
import { JwtPayload } from 'jsonwebtoken';
import cors from 'cors';

import routes from './routes';

import errorHandler from './middlewares/error-handler';
import { notFoundHandler } from './middlewares/not-found-handler';

declare module 'express' {
    interface CustomRequest extends Request {
        token?: string | JwtPayload;
    }
}

class App {
    public server;
    port: number;

    constructor() {
        this.server = express();
        this.port = 3002;

        this.middlewares();
        this.routes();
        this.errorHandler();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(morgan('dev'));
    }

    routes() {
        this.server.use('/api', routes);
    }

    errorHandler() {
        this.server.use(notFoundHandler);
        this.server.use(errorHandler);
    }
}

export default new App().server;
