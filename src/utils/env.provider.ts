import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().optional(),
  DATABASE_HOST: z.string(),
  DATABASE_DB: z.string(),
  DATABASE_PORT: z
    .string()
    .regex(/^[0-9]+$/, { message: "accept only numbers" }),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
});

const envSchemaParse = envSchema.parse(process.env);

const transform = {
  ...envSchemaParse,
  DATABASE_PORT: parseInt(envSchemaParse.DATABASE_PORT),
};

export const envCheckProvider = transform;
