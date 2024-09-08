import { Router } from 'express';
const router = Router();

import { isAdmin } from '../middlewares/auth.middleware';
import * as entityController from '../controllers/entity.controller';

router.post('/', isAdmin, entityController.createEntity);
router.get('/', entityController.getEntities);
router.get('/:id', entityController.getEntity);
router.put('/:id', isAdmin, entityController.updateEntity);
router.delete('/:id', isAdmin, entityController.deleteEntity);

export default router;