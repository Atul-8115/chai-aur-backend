import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



// routes import
import userRouter from './routes/user.routes.js'
import videoRouter from './routes/video.routes.js'
import healthcheckRouter from './routes/healthcheck.router.js'
import tweetRouter from './routes/tweet.router.js'
import subscriptionRouter from "./routes/subscription.routes.js"
import playlistRouter from "./routes/playlist.router.js"
import commentRouter from "./routes/comments.router.js"
import likeRouter from "./routes/likes.router.js"
import dashboardRouter from "./routes/dashboard.router.js"

// routes declaration
app.use("/api/v1/healthcheck",healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use('/api/v1/tweets',tweetRouter)
app.use("/api/v1/videos",videoRouter)
app.use("/api/v1/subscriptions", subscriptionRouter)

app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)
app.use("/api/v1/playlist", playlistRouter)
app.use("/api/v1/dashboard", dashboardRouter)

// export default app
export { app }