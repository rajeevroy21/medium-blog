import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export const Appbar = () => {

    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to="/blogs">
                <div className="text-2xl font-semibold cursor-pointer"> 
                    Medium
                </div>
            </Link>
            <div className="flex items-center gap-4">
                <Link to="/publish">
                <button className=" mr-4 rounded-full bg-gradient-to-tr from-green-800 to-green-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    Publish
                </button>
                </Link>
            
                <Avatar size={"big"} name={"Rajeev"}/>
            </div>
        </div>
    );
};
