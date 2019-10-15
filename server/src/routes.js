import { Router } from 'express';

const routes = new Router();

routes.get('/users', (req, res) => res.json({ Hello: 'World 3' }));

export default routes;
