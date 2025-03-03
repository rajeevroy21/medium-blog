import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

 export interface Blog{
    "content": string;
    "title": string;
    "id": number,
    "author":{
            "name": string
        }
}
export const useBlog = ({id}:{id:string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization:localStorage.getItem("token")
            }
        })
        .then((response) => {
            setBlog(response.data.blog);
            setLoading(false);
        })

    }, [id]);

    return { loading, blog };

}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response) => {
            const sortedBlogs = response.data.blogs.sort((a: Blog, b: Blog) => b.id - a.id);
            setBlogs(sortedBlogs);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        });

    }, []);

    return { loading, blogs };
};

