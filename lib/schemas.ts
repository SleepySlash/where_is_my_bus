import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(500),
});

export const signUpSchema = z.object({
  collegeName: z.string().max(50),
  mobileNumber: z.string().min(10).max(10),
  otp: z.string().max(6)
})
