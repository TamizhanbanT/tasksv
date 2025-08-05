import { z } from 'zod';

export const createProfileRoleSchema = z.object({
  profileId: z.number(),
  roleId: z.number(),
});
