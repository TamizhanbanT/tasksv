import express from 'express';
import * as RoleController from '../controllers/role.controller';

const router = express.Router();

router.post('/', RoleController.createRole);
router.get('/', RoleController.getRoles);
router.get('/:id', RoleController.getRole);
router.delete('/:id', RoleController.deleteRole);

export default router;
