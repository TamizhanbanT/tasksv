import express from 'express';
import * as SubjectController from '../controllers/subjecct.controller';

const router = express.Router();

router.post('/', SubjectController.createSubject);
router.get('/', SubjectController.getSubjects);
router.get('/:id', SubjectController.getSubject);
router.delete('/:id', SubjectController.deleteSubject);

export default router;
