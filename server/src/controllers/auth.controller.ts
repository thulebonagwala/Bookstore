import jwt from 'jsonwebtoken';
import User from '../models/User';
import { Request, Response } from 'express';


export const register = async (req: Request, res: Response) => {

//   const { fullName, email, password } = req.body;

//  if (!fullName || !email || !password) {
//         return res.status(400).json({ Message: "All fields are required." });
        
//     }
  const user = await User.create(req.body);

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '7d' });

  res.status(201).json({ user: { id: user._id, name: user.name, email: user.email }, token });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '7d' });
  res.json({ user: { id: user._id, name: user.name, email: user.email }, token });
};