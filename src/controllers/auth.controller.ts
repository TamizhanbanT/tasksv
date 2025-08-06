
import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";

// Register 
export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json({
      message: "User registered successfully",
      
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Login user 
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);


    res.status(200).json({
      message: "Login successful",
      token: result.token,
    });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

