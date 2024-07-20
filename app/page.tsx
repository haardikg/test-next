import Image from "next/image";
import "dotenv/config"
import getPosts from "@/server/actions/get-posts";



export default async function Home() {
    const data = await getPosts()
    console.log(data) 

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
    </main>
  );
}
