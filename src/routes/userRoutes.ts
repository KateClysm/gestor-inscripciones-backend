import { Router } from 'express';
const router = Router();

import { isAdmin } from '../middlewares/auth.middleware';

import * as userController from '../controllers/user.controller';

router.post('/', isAdmin, userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;