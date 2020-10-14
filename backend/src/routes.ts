import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanageController from './controllers/OrphanageControlles';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanageController.list);

routes.get('/orphanages/:id', OrphanageController.show);

routes.post('/orphanages', upload.array('images'), OrphanageController.create);

export default routes;