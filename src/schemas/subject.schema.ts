import { z } from 'zod';

export const createSubjectSchema = z.object({
  subjectName: z.string().min(1),
});
