import { prisma } from "../config/prisma";
import { createProfileSchema, updateProfileSchema } from "../schemas/profile.schema";

export const createProfile = async (data: any) => {
  try {
    const validatedData = createProfileSchema.parse(data);
    const profile = await prisma.profile.create({
      data: validatedData,
    });
    return profile;
  } catch (error) {
    throw new Error(`Error creating profile: ${error}`);
  }
};

export const getAllProfiles = async () => {
  try {
    const profiles = await prisma.profile.findMany({
      include: {
        profileRoles: {
          include: {
            role: true,
          },
        },
        subjects: true,
        mentors: {
          include: {
            mentor: true,
          },
        },
        students: {
          include: {
            student: true,
          },
        },
      },
    });

    
    return profiles.map((profile) => ({
      id: profile.id,
      email: profile.email,
      roles: profile.profileRoles.map((r) => r.role.name),
      subjects: profile.subjects,
      mentors: profile.mentors,
      students: profile.students,
    }));
  } catch (error) {
    throw new Error(`Error fetching profiles: ${error}`);
  }
};

export const getProfileById = async (id: number) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: { id },
      include: {
        profileRoles: {
          include: {
            role: true,
          },
        },
        subjects: true,
        mentors: {
          include: {
            mentor: true,
          },
        },
        students: {
          include: {
            student: true,
          },
        },
      },
    });

    if (!profile) {
      throw new Error("Profile not found");
    }

    return {
      id: profile.id,
      email: profile.email,
      roles: profile.profileRoles.map((r) => r.role.name),
      subjects: profile.subjects,
      mentors: profile.mentors,
      students: profile.students,
    };
  } catch (error) {
    throw new Error(`Error fetching profile by ID: ${error}`);
  }
};

export const updateProfile = async (id: number, data: any) => {
  try {
    const validatedData = updateProfileSchema.parse(data);
    const updated = await prisma.profile.update({
      where: { id },
      data: validatedData,
    });
    return updated;
  } catch (error) {
    throw new Error(`Error updating profile: ${error}`);
  }
};

export const deleteProfile = async (id: number) => {
  try {
    const deleted = await prisma.profile.delete({
      where: { id },
    });
    return deleted;
  } catch (error) {
    throw new Error(`Error deleting profile: ${error}`);
  }
};
