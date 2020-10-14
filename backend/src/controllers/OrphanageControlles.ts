import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Orphanage from '../model/Orphanage';
import orphanageView from '../views/orphanages_view';

export default {
  async list(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ['images'],
    });

    return res.json(orphanageView.renderMany(orphanages));
  },

  async show(req: Request, res: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const { id } = req.params;

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return res.json(orphanageView.render(orphanage));
  },

  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
      opening_hours,
    } = req.body;

    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = req.files as Express.Multer.File[];

    console.log(requestImages);

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      open_on_weekends,
      opening_hours,
      images,
    });

    console.log(orphanage);
    await orphanagesRepository.save(orphanage);

    return res.status(201).send(orphanage);
  },
};
