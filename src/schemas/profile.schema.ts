import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const createProfileSchema = z.object({
  email: z.string().email().openapi({ example: "student@example.com" }),
  password: z.string().min(6).openapi({ example: "secret123" }),
  name: z.string().openapi({ example: "Tamizh" }),
  parentName: z.string().optional().openapi({ example: "Tamizh" }),
  parentPhone: z.number().optional().openapi({ example: 9876543210 }),
  address: z.string().optional().openapi({ example: "123 Main Street" }),
  pincode: z.number().optional().openapi({ example: 600001 }),
  phone: z.number().optional().openapi({ example: 9876543210 }),
  class: z.number().optional().openapi({ example: 10 }),
  fees: z.number().optional().openapi({ example: 1500 }),
  marks: z.number().optional().openapi({ example: 80 }),
  todaysUpdate: z.string().optional().openapi({ example: "Completed math test" }),
  createdBy: z.string().optional().openapi({ example: "admin" }),
  updatedBy: z.string().openapi({ example: "admin" }),
  role: z.string().optional().default("student").openapi({ example: "student" }),
});

export const updateProfileSchema = createProfileSchema.partial();
