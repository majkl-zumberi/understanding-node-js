const express=require("express");
const app=express();
const port=3000;
//bring in routes
const routes=require("./routes/post");


app.get("/",routes.getPosts);
app.listen(port,()=>console.log("a node server is listening on port:",port,`link: http://localhost:${port}`));