import { Request, Response } from "express";
import {
  assignRoleToProfile,
  getAllProfileRoles,
  deleteProfileRole,
  updateProfileRole,
} from "../services/profileRole.service";

export const assignRole = async (req: Request, res: Response) => {
  try {
    const role = await assignRoleToProfile(req.body);
    res.status(201).json(role);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const fetchProfileRoles = async (_req: Request, res: Response) => {
  try {
    const roles = await getAllProfileRoles();
    res.json(roles);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const removeProfileRole = async (req: Request, res: Response) => {
  try {
    const { profileId, roleId } = req.params;
    const deleted = await deleteProfileRole(Number(profileId), Number(roleId));
    res.json({ message: "Deleted successfully", deleted });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const modifyProfileRole = async (req: Request, res: Response) => {
  try {
    const { profileId, roleId } = req.params;
    const updated = await updateProfileRole(
      Number(profileId),
      Number(roleId),
      req.body
    );
    res.json(updated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
