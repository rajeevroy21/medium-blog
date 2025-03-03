import { Link } from "react-router-dom";
interface BlogCardProps {
   autherName: string;
   title: string;
   content: string;
   publishdDate: string;
   id: number; 
}
export const BlogCard = ({
   id,
   autherName = "Unknown", // Fallback to "Unknown"
   title,
   content,
   publishdDate,
}: BlogCardProps) => {
   return (
      <Link to={`/blog/${id}`}>
         <div className="p-2 border-b border-slate-200 dark:border-gray-400 pb-4 mt-1 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
               <Avatar size={"small"} name={autherName || "Unknown"} /> {/* Avoid undefined */}
               <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{autherName}</div>
               <div className="items-center pl-2 flex justify-center flex-col">
                  {Circle()}
               </div>
               <div className="pl-2 font-thin text-slate-400 flex justify-center flex-col">{publishdDate}</div>
            </div>
            <div className="text-xl font-semibold pt-2"> {title}</div>
            <div className="text-md font-thin text-slate-500">
               {content.slice(0, 100) + "..."}
            </div>
            <div className="text-sm text-slate-400 pt-4">
               {`${Math.ceil(content.length / 100)} min read`}
            </div>
         </div>
      </Link>
   );
};

export function Circle() {
   return (
      <div className="h-1 w-1 rounded-full bg-slate-200 dark:bg-gray-500"></div>
   );
}
export function Avatar({ name = "", size = "small" }: { name?: string; size: "small" | "big" }) {
   const displayLetter = name && name.length > 0 ? name[0].toUpperCase() : "?"; // Fallback to '?'

   return (
      <div
         className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full 
         ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}
      >
         <span
            className={`absolute inset-0 flex items-center justify-center 
            ${size === "small" ? "text-xs" : "text-md"} font-light text-white`}
         >
            {displayLetter}
         </span>
      </div>
   );
}
