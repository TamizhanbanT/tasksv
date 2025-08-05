import { Request, Response } from 'express';
import * as RoleService from '../services/role.service';
import { createRoleSchema } from '../schemas/role.schema';

export const createRole = async (req: Request, res: Response) => {
  try {
    const parsed = createRoleSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.format() });
    }

    const { name } = parsed.data;
    const role = await RoleService.createRole(name);
    res.status(201).json({ message: 'Role created successfully', role });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create role' });
  }
};

export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await RoleService.getAllRoles();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
};

export const getRole = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const role = await RoleService.getRoleById(id);

    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }

    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch role' });
  }
};

export const deleteRole = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await RoleService.deleteRoleById(id);
    res.status(200).json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete role' });
  }
};
