import { Request, Response } from 'express';
import * as SubjectService from '../services/subject.service';
import { createSubjectSchema } from '../schemas/subject.schema';

export const createSubject = async (req: Request, res: Response) => {
  try {
    const parsed = createSubjectSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.format() });
    }

    const subject = await SubjectService.createSubject(parsed.data);
    res.status(201).json({ message: 'Subject created successfully', subject });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create subject' });
  }
};

export const getSubjects = async (_req: Request, res: Response) => {
  try {
    const subjects = await SubjectService.getAllSubjects();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subjects' });
  }
};

export const getSubject = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const subject = await SubjectService.getSubjectById(id);

    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }

    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subject' });
  }
};

export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await SubjectService.deleteSubjectById(id);
    res.status(200).json({ message: 'Subject deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete subject' });
  }
};
