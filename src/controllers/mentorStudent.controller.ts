import { Request, Response } from "express";
import {
  assignMentorToStudent,
  getAllMentorRelations,
  deleteMentorStudentRelation,
  updateMentorStudentRelation,
} from "../services/mentorStudent.service";

// Create
export const assignMentor = async (req: Request, res: Response) => {
  try {
    const result = await assignMentorToStudent(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Read
export const fetchMentorRelations = async (_req: Request, res: Response) => {
  try {
    const relations = await getAllMentorRelations();
    res.json(relations);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Delete
export const removeMentorRelation = async (req: Request, res: Response) => {
  try {
    const { mentorId, studentId } = req.params;
    const result = await deleteMentorStudentRelation(
      Number(mentorId),
      Number(studentId)
    );
    res.json({ message: "Deleted successfully", result });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update
export const modifyMentorRelation = async (req: Request, res: Response) => {
  try {
    const { mentorId, studentId } = req.params;
    const result = await updateMentorStudentRelation(
      Number(mentorId),
      Number(studentId),
      req.body
    );
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
