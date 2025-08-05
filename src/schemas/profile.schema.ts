import { z } from 'zod';

export const createProfileSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
  parentName: z.string().optional(),
  parentPhone: z.bigint().optional(),
  address: z.string().optional(),
  pincode: z.number().optional(),
  phone: z.bigint().optional(),
  class: z.number().optional(),
  fees: z.number().optional(),
  marks: z.number().optional(),
  todaysUpdate: z.string().optional(),
  createdBy: z.string().optional(),
  updatedBy: z.string(),
  role: z.string().optional().default('student'),
});

export const updateProfileSchema = createProfileSchema.partial();
