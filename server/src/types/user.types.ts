import { Document, Model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

export interface IUserMethods {
  comparePassword(password: string): Promise<boolean>;
}

// Combine schema + methods
export type UserDocument = IUser & Document & IUserMethods;

// For Model typing
export type UserModel = Model<UserDocument>;