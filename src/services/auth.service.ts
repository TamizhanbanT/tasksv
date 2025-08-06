import { prisma } from "../config/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "Hornet@student";

export const register = async (data: any) => {
  const { email, password, role, ...rest } = data;

  const existing = await prisma.profile.findUnique({ where: { email } });
  if (existing) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.profile.create({
    data: {
      email,
      password: hashedPassword,
      role, // student | mentor | admin
      ...rest,
    },
  });
};

export const login = async (email: string, password: string) => {
  const user = await prisma.profile.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { token, user };
};
