import { z } from "zod";

export const registerFieldSchema = z.object({
  email: z
    .string()
    .email()
    .min(5, "Email has to be at least five characters more")
    .max(100, "Email has to be less than 100 characters"),
  password: z
    .string()
    .min(8, "Password has to be at least eight characters long")
    .max(50, "Password has to be less than 50 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
      "Password must contain at least one uppercase letter, one number, and one special character",
    ),
});
