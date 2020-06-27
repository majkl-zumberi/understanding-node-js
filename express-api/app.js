const express=require("express");

const app=express();

const port=3000;

//bring in routes
const postRoutes=require("./routes/post");

//morgan for middleware 
/**
 * morgan agisce come middleware 
 * riporta informazioni come il tipo di accesso e lo status
 * simile a json-server
 * esempio GET / 304 5.418 ms
 */
const morgan=require("morgan");

app.use(morgan("dev"));

app.use("/",postRoutes.router);


app.listen(port,()=>console.log("a node server is listening on port:",port,`link: http://localhost:${port}`));