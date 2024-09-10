import { Router } from 'express';
const router = Router();

import { authenticateToken } from '../middlewares/authenticateToken';
import { authorizeAdmin } from '../middlewares/authorizeAdmin';
import * as entityController from '../controllers/entity.controller';

router.get('/', entityController.getEntities);
router.get('/:id', entityController.getEntity);

router.post('/', authenticateToken, authorizeAdmin, entityController.createEntity);
router.put('/:id', authenticateToken, authorizeAdmin, entityController.updateEntity);
router.delete('/:id', authenticateToken, authorizeAdmin, entityController.deleteEntity);

export default router;