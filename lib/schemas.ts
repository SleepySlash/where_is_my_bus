import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(500),
});

export const createUserSchema = z.object({
  name: z.string().min(2).max(50).optional(),
  phone: z.string().min(10).max(10),
  rollNumber: z.string().min(2).max(50),
});
