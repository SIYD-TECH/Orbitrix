"use client";

import BlogContent from "@/components/BlogContent";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { blogs } from "@/data/blogs";
import { useParams, useRouter } from "next/navigation"

const Blog = () => {
  const params = useParams()
  const id = params.id;
  const router = useRouter()

  const blogPost = blogs.find(blg => blg._id === id)

  if (!blogPost) {
    router.push("/blog")
  }

  return (
    <main className="bg-gray-50 pb">
      <BlogHeader theme="light" />

      {/* hero */}
      <div className="relative">
        <img src={blogPost?.img} className="h-110 md:h-[510px] md:h-[550px] xl:h-[600px] w-full object-center object-cover" />

        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent from-0% via-black/50 via-40% to-black to-100%">
          <div className="bottom-0 absolute p-4 xl:px-30">
            <p className="font-outfit py-1 px-4 bg-gray-700 text-white rounded-full text-[12px] inline-block">
              TRENDING
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-outfit mt-2 md:mt-4 lg:mt-6">{blogPost?.title}</h1>

            <div className="mt-3 lg:mt-6 xl:mt-8 text-white flex-start gap-2 text-[12px]">
              <p className="font-outfit">ORBITRIXNG</p>
              <div className="h-1 w-1 rounded-full bg-gray-500"></div>
              <span className="font-jsl text-gray-400">{blogPost?.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* content */}
      <BlogContent sku={blogPost!.sku} />

      <Footer />
    </main>
  )
}

export default Blog