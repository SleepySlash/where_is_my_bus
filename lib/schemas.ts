import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(500),
});

export const signUpSchema = z.object({
  collegeName: z.string().min(3).max(50),
  mobileNumber: z.string().min(10).max(10),
  otp: z.string().min(4).max(6),
});

export const adminAccountSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  role: z.string().min(5).max(25),
});

export const createUserSchema = z.object({
  name: z.string().min(2).max(50).optional(),
  phone: z.string().min(10).max(10),
  rollNumber: z.string().min(2).max(50),
});
export const profileSchema = z.object({
  firstname: z.string().min(2).max(50).optional(),
  lastname: z.string().min(2).max(10),
  rollno: z.string().min(10).max(10),
  dob: z.string().min(10).max(10),
  gender: z.string().min(3).max(6),
  routeno: z.string(),
  stopCoordinates: z.string(),
  eveningCoordinates: z.string().optional(),
});
