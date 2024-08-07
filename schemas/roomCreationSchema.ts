import { z } from "zod";

export const schema = z.object({
  description: z.string().min(1, "Room description must be at least 1 character long"),
  capacity: z.number().int().positive("Room capacity must be a positive number"),
  pricePerNight: z.number().int().positive("Room price must be a positive number"),
});
