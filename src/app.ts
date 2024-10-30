import express from 'express';

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
    }

    routes() {
        this.server.use('/api', routes);
    }
}

export default new App().server;
