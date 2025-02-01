import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

import authRoutes from "./routes/auth.js"
import commentRoutes from "./routes/comments.js"
import likeRoutes from "./routes/likes.js"
import postRoutes from "./routes/posts.js"
import storyRoutes from "./routes/stories.js"
import userRoutes from "./routes/users.js"


//middlewares
app.use(express.json())
app.use(cors(
    {origin: "http://localhost:5173",
        credentials: true,
    }
))
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/stories", storyRoutes)
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});


app.listen(5000, ()=>{
    console.log("Connected to BackEnd!")
})