import { blogs } from "@/data/blogs"
import { Blog } from "@/types/blog";
import { Search } from "lucide-react"
import { redirect } from "next/navigation";

const BlogSearchBox = () => {
  const recentBlogs = blogs.slice(0, 2);

  const toBlog = (blog: Blog) => {
    redirect(`/blog/${blog._id}`)
  }

  return (
    <div className="bg-white border border-gray-100 p-6">
      <h1 className="font-outfit text-lg">Search</h1>

      <div className="relative">
        <Search className="absolute left-4 top-8.5" size={18}  />
        <input 
          type="search"
          className="p-4 border border-gray-200 rounded-full pl-11 mt-4 w-full font-jsl text-sm focus:outline-none"
          placeholder="Search..." 
        />
      </div>

      <div className="mt-8">
        <h1 className="font-outfit text-[18px]">Recent Posts</h1>

        {/* trending */}
        {recentBlogs.map(blg => {
          return (
            <div 
              key={blg._id} 
              onClick={() => toBlog(blg)} 
              className="mt-6 flex justify-start py-1 cursor-pointer items-start gap-4 hover:bg-gray-50 active:bg-gray-50"
            >
              <div className="h-18 w-20 flex-none lg:h-20 lg:w-22">
                <img src={blg.img} className="h-full w-full" />
              </div>

              <div>
                <div className="flex-start gap-2 text-[12px] flex-wrap">
                  <p className="font-jsans">TRENDING</p>
                  <div className="bg-gray-400 h-1 w-1 rounded-full"></div>
                  <span className="font-jsl text-gray-500">{blg.date}</span>
                </div>

                <h1 className="font-outfit text-lg mt-2">{blg.title}</h1>
              </div>
            </div>
          )
        })}

        <div className="h-15 mt-8 bg-gray-100"></div>

      </div>
    </div>
  )
}

export default BlogSearchBox