import { prisma } from "../config/prisma";
import { createProfileRoleSchema } from "../schemas/profileRole.schema";

export const assignRoleToProfile = async (data: any) => {
  const validated = createProfileRoleSchema.parse(data);
  return await prisma.profileRole.create({ data: validated });
};

export const getAllProfileRoles = async () => {
  return await prisma.profileRole.findMany({
    include: {
      profile: true,
      role: true,
    },
  });
};

export const deleteProfileRole = async (profileId: number, roleId: number) => {
  return await prisma.profileRole.delete({
    where: {
      profileId_roleId: {
        profileId,
        roleId,
      },
    },
  });
};

export const updateProfileRole = async (
  profileId: number,
  roleId: number,
  newData: any
) => {
  const validated = createProfileRoleSchema.parse(newData);
  return await prisma.profileRole.update({
    where: {
      profileId_roleId: {
        profileId,
        roleId,
      },
    },
    data: validated,
  });
};
