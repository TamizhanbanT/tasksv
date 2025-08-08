

import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";
import { authenticate, authorizeRoles } from "../middlewares/auth.middleware";

const router = Router();


router.post("/register", authenticate, authorizeRoles("admin", "mentor"), registerUser);


router.post("/login", loginUser);

export default router;

