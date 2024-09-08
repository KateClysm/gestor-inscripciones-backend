import { Router } from 'express';
const router = Router();
import { isAdmin } from '../middlewares/auth.middleware';
import * as projectController from '../controllers/project.controller';

router.get('/', projectController.getProjects);
router.post('/', isAdmin,  projectController.postProject);
router.get('/:id', projectController.getProject);
router.delete('/:id', isAdmin, projectController.deleteProject);
router.put('/:id', isAdmin, projectController.updateProject);

export default router;