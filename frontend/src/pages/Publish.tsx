import  axios  from "axios";
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent,useState } from "react";


export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return <div>
        <Appbar/>
            <div className="pt-4 flex flex-col items-center justify-center  ">
                <div className="max-w-screen-lg  w-full ">
                <input  onChange={(e)=>setTitle(e.target.value)}
                   type="text"  className="w-full  text-black-200 bg-slate placeholder:text-slate-400 text-slate-700 text-lg border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-gray-300 shadow-sm focus:shadow" placeholder="Title"/>

                <TextEditor onChange={(e)=>{
                    setDescription(e.target.value)}}/> 

                <button onClick={async()=>{
                   const response= axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content:description
                    },{
                        headers:{
                            Authorization: localStorage.getItem('token')
                        }
                    });
                    navigate(`/blog/${(await response).data.id}`);
                }}
                    type="submit"
                    className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                    Publish post
                   </button>
                </div>
            </div>
           
    </div>
};
function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return (
        <div className="mt-2">
            <div className="w-full mb-4">
                <div className="flex items-center justify-between">
                </div>
                <div className="focus-within:outline-2 focus-within:outline-gray-600 ...">
                    <label className="sr-only">Publish post</label>
                    <textarea onChange={onChange}
                        id="editor"
                        rows={8}
                        className="outline-none block w-full px-0 text-lg text-gray-800 bg-white border-0 pl-2"
                        placeholder="Write an article..."
                        required/>
                </div>
            </div>
        </div>
    );
}
