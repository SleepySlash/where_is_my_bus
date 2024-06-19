import { any, z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(500),
});

export const profileSchema = z.object({
  firstname:z.string().min(2,{message:"Firstname must contain 2 characters"}).max(30),
  lastname:z.string().min(2,{message:"Lastname must contain 2 characters"}).max(30),
  rollno:z.string().length(10,{message:"Enter your rollno"}).optional(),
  gender:z.string().optional(),
  routeno:z.string().optional(),
  area:z.string().min(2).max(50).optional(),
  coordinate:z.string().min(10).max(50),
  dob:z.string().length(8).optional(), 
})