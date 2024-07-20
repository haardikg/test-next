import { pgTable, serial, text} from "drizzle-orm/pg-core";

export const PostsTable = pgTable('PostsTable', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  name: text('name').notNull(),
});
