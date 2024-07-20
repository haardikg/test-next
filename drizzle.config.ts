import { Config, defineConfig } from "drizzle-kit";
import * as dotenv from 'dotenv'

 
export default defineConfig({
  schema: "./server/schema.ts",
  out: "./server/migrations",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  }
}) satisfies Config
