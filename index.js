import express from "express"
import connectionDB from "./DB/connectionDB.js"
import userRouter from "./src/modules/users/users.routes.js"
import postRouter from "./src/modules/posts/posts.routes.js"
import commentRouter from "./src/modules/comments/comments.routes.js"
const port=process.env.port ||4000
const app = express()



app.use(express.json())
app.use("/users",userRouter)
app.use("/comments",commentRouter)
app.use("/posts",postRouter)
app.use("/addcomments",commentRouter)
connectionDB()






app.use( "*",(req,res,next)=> {

return res.json ({msg: "404 not found"})

})

app.listen(port, () =>{
    console.log("server is running on port 4000")
})



