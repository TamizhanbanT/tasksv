import { Router } from "express";
import {
  assignRole,
  fetchProfileRoles,
  removeProfileRole,
  modifyProfileRole,
} from "../controllers/profileRole.controller";

const router = Router();

router.post("/", assignRole);
router.get("/", fetchProfileRoles);
router.delete("/:profileId/:roleId", removeProfileRole);
router.put("/:profileId/:roleId", modifyProfileRole);

export default router;
