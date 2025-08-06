import { Router } from "express";
import {
  createProfileController,
  getAllProfilesController,
  getProfileByIdController,
  updateProfileController,
  deleteProfileController,
} from "../controllers/profile.controller";
import { authenticate, authorizeRoles } from "../middlewares/auth.middleware";

const router = Router();

// Only Admin and Mentor can create student details
router.post("/", authenticate, authorizeRoles("admin", "mentor"), createProfileController);

// Authenticated users can view details
router.get("/", authenticate, getAllProfilesController);
router.get("/:id", authenticate, getProfileByIdController);

// Only Admin can update or delete profiles

router.put("/:id", authenticate, authorizeRoles("admin"), updateProfileController);
router.delete("/:id", authenticate, authorizeRoles("admin"), deleteProfileController);

export default router;
