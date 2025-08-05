import { prisma } from "../config/prisma";
import { createMentorStudentSchema } from "../schemas/mentorStudent.schema";

// Create mentor-student relation
export const assignMentorToStudent = async (data: any) => {
  const validated = createMentorStudentSchema.parse(data);
  return await prisma.mentorStudent.create({ data: validated });
};

// Get all mentor-student relations with associations
export const getAllMentorRelations = async () => {
  return await prisma.mentorStudent.findMany({
    include: {
      mentor: true,
      student: true,
    },
  });
};

// Delete mentor-student relation
export const deleteMentorStudentRelation = async (
  mentorId: number,
  studentId: number
) => {
  return await prisma.mentorStudent.delete({
    where: {
      mentorId_studentId: {
        mentorId,
        studentId,
      },
    },
  });
};

// Update mentor-student relation (rare case - replace relation)
export const updateMentorStudentRelation = async (
  mentorId: number,
  studentId: number,
  newData: any
) => {
  const validated = createMentorStudentSchema.parse(newData);
  return await prisma.mentorStudent.update({
    where: {
      mentorId_studentId: {
        mentorId,
        studentId,
      },
    },
    data: validated,
  });
};
