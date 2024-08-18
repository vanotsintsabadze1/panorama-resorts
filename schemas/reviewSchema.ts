import {z} from "zod"

export const schema = z.object({
  text: z.string().min(50, "Review must be at least 50 characters long").max(450, "Review must be at most 450 characters long"),  
})