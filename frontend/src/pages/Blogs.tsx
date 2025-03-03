import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Blogskeleton } from "../components/Blogskeleton";
import { useBlogs } from "../hooks";

export const Blogs=()=>{
   const {loading,blogs}=useBlogs();

   if(loading)
   {
    return <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
        <Blogskeleton />
        <Blogskeleton />
        <Blogskeleton />
        <Blogskeleton />
        <Blogskeleton />
        <Blogskeleton />
        </div> 
    </div>
    </div>
   }
    return <div >
            <Appbar />
            <div className="flex justify-center">
           <div className="">
            {blogs.map(blog=><BlogCard 
            id={blog.id}
              autherName={blog.author.name || "Unknown"}
              title={blog.title}
              content={blog.content}
              publishdDate={"2nd Feb 2025"}
        />
      )}  
    </div>
    </div>
    </div>
    
}