import express from 'express';
import morgan from 'morgan';
import { JwtPayload } from 'jsonwebtoken';

import routes from './routes';

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
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(morgan('dev'));
    }

    routes() {
        this.server.use('/api', routes);
    }
}

export default new App().server;
