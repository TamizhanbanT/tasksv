import { Router } from "express";
import {
  assignMentor,
  fetchMentorRelations,
  removeMentorRelation,
  modifyMentorRelation,
} from "../controllers/mentorStudent.controller";

import { authenticate, authorizeRoles } from "../middlewares/auth.middleware";

const router = Router();


// Create a mentor-student relation
router.post("/", authenticate, authorizeRoles("admin", "mentor"), assignMentor);

// Get all mentor-student relations
router.get("/", authenticate, fetchMentorRelations);

// Delete a mentor-student relation
router.delete(
  "/:mentorId/:studentId",
  authenticate,
  authorizeRoles("admin", "mentor"),
  removeMentorRelation
);

// Update a mentor-student relation
router.put(
  "/:mentorId/:studentId",
  authenticate,
  authorizeRoles("admin", "mentor"),
  modifyMentorRelation
);

export default router;
