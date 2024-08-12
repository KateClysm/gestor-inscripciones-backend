import { Router } from 'express';
const router = Router();

import * as exampleController from '../controllers/example.controller';

router.get('/examples', exampleController.getExamples);
router.post('/examples', exampleController.createExample);
router.get('/examples/:id', exampleController.getExample);
router.delete('/examples/:id', exampleController.deleteExample);
router.put('/examples/:id', exampleController.updateExample);

export default router;