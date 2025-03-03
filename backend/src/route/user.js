import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@rajeevroy/medium-common";
export const userRoute = new Hono();
userRoute.post("/signup", async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            messsage: "inputs are not correct"
        });
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const user = await prisma.user.create({
            data: {
                username: body.username,
                password: body.password,
                name: body.name,
            },
        });
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json((token));
    }
    catch (e) {
        console.log(e);
        c.status(411);
        return c.text("invalid");
    }
});
userRoute.post("/signin", async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            messsage: "inputs are not correct"
        });
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const user = await prisma.user.findFirst({
            where: {
                username: body.username,
                password: body.password,
            },
        });
        if (!user) {
            c.status(403);
            return c.json({
                error: "user not found",
            });
        }
        const token = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({
            token,
            message: "signin successfully"
        });
    }
    catch (e) {
        console.log(e);
        c.status(411);
        return c.text("invalid");
    }
});
userRoute.get("/user/:authorId", async (c) => {
    const authorId = parseInt(c.req.param("authorId"));
    if (isNaN(authorId)) {
        c.status(400);
        return c.json({ error: "Invalid author ID" });
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const user = await prisma.user.findUnique({
            where: { id: authorId },
            select: {
                id: true,
                name: true,
            },
        });
        if (!user) {
            c.status(404);
            return c.json({ error: "User not found" });
        }
        const logoLetter = user.name ? user.name.charAt(0).toUpperCase() : "";
        return c.json({ user, logoLetter });
    }
    catch (error) {
        console.error(error);
        c.status(500);
        return c.json({ error: "Internal Server Error" });
    }
});
