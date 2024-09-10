import { Router } from 'express';
const router = Router();

import { authenticateToken } from '../middlewares/authenticateToken';
import { authorizeAdmin } from '../middlewares/authorizeAdmin';

import * as userController from '../controllers/user.controller';

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);

router.post('/', authenticateToken, authorizeAdmin, userController.createUser);
router.put('/:id', authenticateToken, userController.updateUser);
router.delete('/:id', authenticateToken, userController.deleteUser);

export default router;