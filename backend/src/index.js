import { Hono } from "hono";
import { userRoute } from "./route/user";
import { blogRoute } from "./route/blog";
import { cors } from 'hono/cors';
const app = new Hono();
app.use('/*', cors());
app.route("/api/v1/user", userRoute);
app.route("/api/v1/blog", blogRoute);
export default app;
