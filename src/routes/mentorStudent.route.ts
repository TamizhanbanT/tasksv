import { Router } from "express";
import {
  assignMentor,
  fetchMentorRelations,
  removeMentorRelation,
  modifyMentorRelation,
} from "../controllers/mentorStudent.controller";

const router = Router();

router.post("/", assignMentor);
router.get("/", fetchMentorRelations);
router.delete("/:mentorId/:studentId", removeMentorRelation);
router.put("/:mentorId/:studentId", modifyMentorRelation);

export default router;
