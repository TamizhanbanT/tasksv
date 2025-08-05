import { Request, Response } from "express";
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} from "../services/profile.service";

export const createProfileController = async (req: Request, res: Response) => {
  try {
    const profile = await createProfile(req.body);
    return res.status(201).json({
      message: "Profile created successfully",
      data: profile,
    });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const getAllProfilesController = async (_req: Request, res: Response) => {
  try {
    const profiles = await getAllProfiles();
    return res.status(200).json(profiles);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getProfileByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const profile = await getProfileById(id);
    return res.status(200).json(profile);
  } catch (error: any) {
    return res.status(404).json({ error: error.message });
  }
};

export const updateProfileController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const updated = await updateProfile(id, req.body);
    return res.status(200).json({
      message: "Profile updated successfully",
      data: updated,
    });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};

export const deleteProfileController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const deleted = await deleteProfile(id);
    return res.status(200).json({
      message: "Profile deleted successfully",
      data: deleted,
    });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};
