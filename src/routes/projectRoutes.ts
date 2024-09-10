import { Router } from 'express';
const router = Router();
import { authenticateToken } from '../middlewares/authenticateToken';
import { authorizeAdmin } from '../middlewares/authorizeAdmin';
import * as projectController from '../controllers/project.controller';

router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProject);

router.post('/', authenticateToken, authorizeAdmin, projectController.postProject);
router.delete('/:id', authenticateToken, authorizeAdmin, projectController.deleteProject);
router.put('/:id', authenticateToken, authorizeAdmin, projectController.updateProject);

export default router;