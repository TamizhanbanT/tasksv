import express from "express";
import swaggerUi from "swagger-ui-express";
import { openApiSpec } from "./swagger";

import roleRoutes from "./routes/role.route";
import subjectRoutes from "./routes/subject.route";
import profileRoutes from "./routes/profile.route";
import profileRoleRoutes from "./routes/profileRole.routes";
import mentorStudentRoutes from "./routes/mentorStudent.route";
import authRoutes from "./routes/auth.route";

import dotenv from "dotenv";
dotenv.config();

const port = 3000;
const app = express();
app.use(express.json());

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openApiSpec));

// Routes
app.use("/api/roles", roleRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/profileRoles", profileRoleRoutes);
app.use("/api/mentorstudents", mentorStudentRoutes);
app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
