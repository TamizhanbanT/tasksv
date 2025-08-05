import { Router } from "express";
import {
  createProfileController,
  getAllProfilesController,
  getProfileByIdController,
  updateProfileController,
  deleteProfileController,
} from "../controllers/profile.controller";

const router = Router();

router.post("/", createProfileController);
router.get("/", getAllProfilesController);
router.get("/:id", getProfileByIdController);
router.put("/:id", updateProfileController);
router.delete("/:id", deleteProfileController);

export default router;
