import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createRole = async (name: string) => {
  return await prisma.role.create({
    data: { name },
  });
};

export const getAllRoles = async () => {
  return await prisma.role.findMany();
};

export const getRoleById = async (id: number) => {
  return await prisma.role.findUnique({
    where: { id },
  });
};

export const deleteRoleById = async (id: number) => {
  return await prisma.role.delete({
    where: { id },
  });
};
