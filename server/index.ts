import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from '@/server/schema'

const client = new Client({
  connectionString: process.env.DATABASE_URL as string,
});

export const db = drizzle(client, {schema, logger: true});
