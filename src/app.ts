import express from 'express';
import morgan from 'morgan';

import routes from './routes';

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
