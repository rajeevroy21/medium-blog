import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
   return (
      <div>
         <Appbar />
            <div className="flex justify-center">
                <div className="grid grid-cols-12 w-full max-w-screen-xl pt-12">
                    <div className="col-span-8 px-10">
                    <div className="text-5xl font-extrabold">{blog.title}</div>
                    <div className="text-slate-500 pt-2">post on 2nd dec 2025</div>
                    <div className="pt-4">{blog.content}</div>
                    </div>
                     <div className="col-span-4">
                            <div className="text-slate-600 text-lg ">
                            Author
                            </div>
                            
                            <div className="flex ">
                                <div className="pr-4 flex flex-col justify-center"> 
                                <Avatar size={"big"} name={blog.author.name ||"Anonymous" } />
                                </div>
                                <div>
                                    <div className="text-xl font-bold">
                                        {blog.author.name||"Anonymous"}
                                    </div>
                                    <div className="pt-2 text-slate-500">
                                    Random catch phrases about the author's life and work and how he/she is a great person
                                   </div>
                            </div>
                        </div>
                         
                    </div>
                </div>
           </div>
      </div>
   );
};
