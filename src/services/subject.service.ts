import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createSubject = async (data: { subjectName: string }) => {
  return await prisma.subject.create({ data });
};

export const getAllSubjects = async () => {
  return await prisma.subject.findMany();
};

export const getSubjectById = async (id: number) => {
  return await prisma.subject.findUnique({ where: { id } });
};

export const deleteSubjectById = async (id: number) => {
  return await prisma.subject.delete({ where: { id } });
};
