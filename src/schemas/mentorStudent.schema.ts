import { z } from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

export const createMentorStudentSchema = z.object({
  mentorId: z.number().openapi({ example: 1 }),
  studentId: z.number().openapi({ example: 2 }),
});
