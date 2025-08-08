import { OpenApiGeneratorV31, OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";

import { createProfileSchema, updateProfileSchema } from "./schemas/profile.schema";
import { createMentorStudentSchema } from "./schemas/mentorStudent.schema";
import { createRoleSchema } from "./schemas/role.schema";
import { createSubjectSchema } from "./schemas/subject.schema";

const registry = new OpenAPIRegistry();

//  Authorize button
registry.registerComponent("securitySchemes", "bearerAuth", {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
});

registry.register("CreateProfile", createProfileSchema);
registry.register("UpdateProfile", updateProfileSchema);
registry.register("CreateMentorStudent", createMentorStudentSchema);
registry.register("CreateRole", createRoleSchema);
registry.register("CreateSubject", createSubjectSchema);

// AUTH ENDPOINTS

registry.registerPath({
  method: "post",
  path: "/api/register",
  summary: "Register a new user",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: { "application/json": { schema: createProfileSchema } },
    },
  },
  responses: {
    201: { description: "User registered successfully" },
    400: { description: "Validation error" },
  },
});

registry.registerPath({
  method: "post",
  path: "/api/login",
  summary: "Login and get JWT token",
  request: {
    body: {
      content: {
        "application/json": {
          schema: createProfileSchema.pick({ email: true, password: true }),
        },
      },
    },
  },
  responses: {
    200: { description: "Login successful, returns JWT token" },
    401: { description: "Invalid credentials" },
  },
});

// PROFILES ENDPOINTS

registry.registerPath({
  method: "post",
  path: "/api/profiles",
  summary: "Create a new profile",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: { "application/json": { schema: createProfileSchema } },
    },
  },
  responses: {
    201: { description: "Profile created successfully" },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/profiles",
  summary: "Get all profiles",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "List of profiles" },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/profiles/{id}",
  summary: "Get profile by ID",
  security: [{ bearerAuth: [] }],
  parameters: [
    { name: "id", in: "path", required: true, schema: { type: "integer" } },
  ],
  responses: {
    200: { description: "Profile details" },
    404: { description: "Profile not found" },
  },
});

registry.registerPath({
  method: "put",
  path: "/api/profiles/{id}",
  summary: "Update a profile",
  security: [{ bearerAuth: [] }],
  parameters: [
    { name: "id", in: "path", required: true, schema: { type: "integer" } },
  ],
  request: {
    body: {
      content: { "application/json": { schema: updateProfileSchema } },
    },
  },
  responses: {
    200: { description: "Profile updated successfully" },
  },
});

registry.registerPath({
  method: "delete",
  path: "/api/profiles/{id}",
  summary: "Delete a profile",
  security: [{ bearerAuth: [] }],
  parameters: [
    { name: "id", in: "path", required: true, schema: { type: "integer" } },
  ],
  responses: {
    204: { description: "Profile deleted successfully" },
  },
});

// MENTOR-STUDENT ENDPOINTS

registry.registerPath({
  method: "post",
  path: "/api/mentorstudents",
  summary: "Assign mentor to student",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: { "application/json": { schema: createMentorStudentSchema } },
    },
  },
  responses: {
    201: { description: "Mentor assigned successfully" },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/mentorstudents",
  summary: "Get mentor-student relations",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "List of mentor-student relations" },
  },
});

// ROLES ENDPOINTS

registry.registerPath({
  method: "post",
  path: "/api/roles",
  summary: "Create a role",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: { "application/json": { schema: createRoleSchema } },
    },
  },
  responses: {
    201: { description: "Role created successfully" },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/roles",
  summary: "Get all roles",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "List of roles" },
  },
});

// SUBJECTS ENDPOINTS

registry.registerPath({
  method: "post",
  path: "/api/subjects",
  summary: "Create a subject",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: { "application/json": { schema: createSubjectSchema } },
    },
  },
  responses: {
    201: { description: "Subject created successfully" },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/subjects",
  summary: "Get all subjects",
  security: [{ bearerAuth: [] }],
  responses: {
    200: { description: "List of subjects" },
  },
});

const generator = new OpenApiGeneratorV31(registry.definitions);

export const openApiSpec = generator.generateDocument({
  openapi: "3.1.0",
  info: {
    title: "School Management API",
    version: "1.0.0",
    description: "API documentation for School Management System",
  },
  servers: [{ url: "http://localhost:3000" }],
});
