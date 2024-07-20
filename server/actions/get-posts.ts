import { db } from "@/server"

export default async function getPosts(){
  const posts = await db.query.PostsTable.findMany()
  if (!posts){
    return {error: "No posts found"}
  } 
    return {success: posts}
}