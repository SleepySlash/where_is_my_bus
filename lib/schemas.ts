import { z } from "zod";

export interface getUserInterface {
  Phone: String;
  RollNumber: String;
  Role: String;
  [key: string]: any;
}

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

export const createStudentSchema = z.object({
  phone: z.string().min(10).max(10),
  rollNumber: z.string().min(2, "Must give complete roll number").max(50),
  p1Phone: z
    .string()
    .max(10)
    .optional()
    .refine((val) => val === "" || val!.length >= 10, {
      message: "p1Phone must be at least 10 characters or left empty",
    }),
  p2Phone: z
    .string()
    .max(10)
    .optional()
    .refine((val) => val === "" || val!.length >= 10, {
      message: "p2Phone must be at least 10 characters or left empty",
    }),
});

export const createFacultySchema = z.object({
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(10, "Enter a valid phone number"),
  rollNumber: z.string().min(2, "Enter valid roll number").max(50),
});

export const OTPSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export const profileSchema = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(10),
  rollno: z.string().min(10).max(10),
  dob: z
    .string()
    .min(10, { message: "Enter a valid date" })
    .max(10, { message: "Enter a valid date" }),
  gender: z.string().min(3).max(6),
  routeno: z.string(),
  stopCoordinates: z.string(),
  eveningCoordinates: z.string().optional(),
});
