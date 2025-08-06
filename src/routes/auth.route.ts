// import { Router } from "express";
// import { loginUser, registerUser } from "../controllers/auth.controller";

// const router = Router();

// router.post("/register", registerUser); // Admin & Mentor only
// router.post("/login", loginUser);

// export default router;

import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controller";
import { authenticate, authorizeRoles } from "../middlewares/auth.middleware";

const router = Router();


router.post("/register", authenticate, authorizeRoles("admin", "mentor"), registerUser);


router.post("/login", loginUser);

export default router;

