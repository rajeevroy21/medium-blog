import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { ErrorBoundary, use } from "hono/jsx";
import { createBlogInput, updateBlogInput } from "@rajeevroy/medium-common";

export const blogRoute = new Hono<{
   Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
   };
   variables: {
      userId: string;
   };
}>();

blogRoute.use("/*", async (c, next) => {
   const token = c.req.header("Authorization") || "";
   try {
      const user = await verify(token, c.env.JWT_SECRET);
      if (user) {
         c.set("userId", user.id);
         await next();
      } else {
         c.status(403);
         return c.json({
            message: "you are not login",
         });
      }
   } catch (e) {
      console.log(e);
      c.status(403);
      return c.json({
         message: "you are not login",
      });
   }
});

blogRoute.post("/", async (c) => {
   const body = await c.req.json();
   const { success } = createBlogInput.safeParse(body);
   if (!success) {
      c.status(411);
      return c.json({
         messsage: "inputs are not correct",
      });
   }
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   const userId = c.get("userId");
   const blog = await prisma.blog.create({
      data: {
         title: body.title,
         content: body.content,
         authorId: Number(userId),
      },
   });
   return c.json({
      id: blog.id,
   });
});
blogRoute.put("/", async (c) => {
   const body = await c.req.json();
   const { success } = updateBlogInput.safeParse(body);
   if (!success) {
      c.status(411);
      return c.json({
         messsage: "inputs are not correct",
      });
   }
   const userId = c.get("userId");
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   const blog = await prisma.blog.update({
      where: {
         id: body.id,
         authorId: Number(userId),
      },
      data: {
         title: body.title,
         content: body.content,
      },
   });
   return c.json({
      id: blog.id,
   });
});
blogRoute.get("/bulk", async (c) => {
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   const blogs = await prisma.blog.findMany({
      select:{
         content:true,
         title:true,
         authorId:true,
         id:true,
         author:{
            select:{
               name:true
            }
         }
      }
   });
   return c.json({ blogs: blogs });
});

blogRoute.get("/:id", async (c) => {
   const id = c.req.param("id");
   const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
   }).$extends(withAccelerate());

   const blog = await prisma.blog.findFirst({
      where: {
         id: Number(id),
      },
      select:{
         id:true,
         title:true,
         content:true,
         author:{
            select:{
               name:true
            }
         }
      }
   });
   return c.json({blog});
});

