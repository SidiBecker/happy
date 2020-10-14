import { Router } from 'express';

import OrphanageController from './controllers/OrphanageControlles';

const routes = Router();

routes.get('/orphanages', OrphanageController.list);

routes.get('/orphanages/:id', OrphanageController.show);

routes.post('/orphanages', OrphanageController.create);

export default routes;
