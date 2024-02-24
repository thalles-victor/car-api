import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().optional(),
});

export const envCheckProvider = envSchema.parse(process.env);
