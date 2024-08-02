import { z } from "zod";

export const schema = z.object({
  fullName: z
    .string()
    .min(5, "Name has to be at least 5 characters long")
    .max(100, "Name has to be at most 100 characters long"),
  email: z
    .string()
    .email()
    .min(10, "Email has to be at least 10 characters long")
    .max(100, "Email has to be at most 100 characters long"),
  topic: z
    .string()
    .min(5, "Topic has to be at least 5 characters long")
    .max(100, "Topic has to be at most 100 characters long"),
  message: z
    .string()
    .min(10, "Description has to be at least 10 characters long")
    .max(300, "Description has to be at most 300 characters long"),
});
