import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    try {
        res.json({ message: 'Hello World' });
    } catch (err) {
        console.log(err);
    }
});

export default routes;
