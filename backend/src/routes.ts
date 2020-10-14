import express, { Router } from 'express';
import multer from 'multer';
import path from 'path';

import uploadConfig from './config/upload';
import OrphanageController from './controllers/OrphanageControlles';

const routes = Router();
const upload = multer(uploadConfig);

routes.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

routes.get('/orphanages', OrphanageController.list);

routes.get('/orphanages/:id', OrphanageController.show);

routes.post('/orphanages', upload.array('images'), OrphanageController.create);


export default routes;
