"use client";

import { Blog } from "@/types/blog"
import { useRouter } from "next/navigation";


const BlogDisplay = ({ blog }: { blog: Blog }) => {
  const router = useRouter()

  const toBlog = () => {
    router.push(`/blog/${blog._id}`)
  }

  return (
    <div 
      onClick={toBlog} 
      className="bg-white grid grid-cols-1 sm:grid-cols-2 border border-gray-100 cursor-pointer mb-8"
    >
      <div className="h-65 md:h-full overflow-hidden">
        <img src={blog.img} className="h-full w-full object-center object-cover hover:scale-110 active:scale-110 ease-in-out duration-600 transition-transform" />
      </div>
      <div className="p-6">
        <p className="font-outfit py-1 px-5 rounded-full bg-gray-600 text-sm inline-block text-white">
          Trending
        </p>

        <h1 className="font-outfit text-xl md:text-2xl mt-2 md:mt-4">{blog.title}</h1>

        <p className="font-jsl text-gray-500 text-[15px] mt-2 md:mt-4">{blog.desc}</p>

        <hr className="w-16 mt-5" />

        <p className="font-jsl text-gray-400 text-[12px] mt-4 md:mt-6">{blog.date}</p>
      </div>
    </div>
  )
}

export default BlogDisplay