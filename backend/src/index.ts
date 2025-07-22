import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { verify } from 'hono/jwt'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono();

app.use("/*", cors())
app.get('/', (c) => {
  return c.text('Server is running');
})
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);




export default app
