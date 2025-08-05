import { z } from 'zod';

export const createMentorStudentSchema = z.object({
  mentorId: z.number(),
  studentId: z.number(),
});
