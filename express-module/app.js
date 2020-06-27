const express=require("express");//./node_modules/express

const app=express()//runs express app, ready to listen


/*
 * method that listen to the request coming from the browser to the server 
 * takes two parameters:
 * the url and the callback function
 * the callback takes two parameters: the request and the response
 * '/' home route 
 */
app.get('/',(req,res)=>{
    res.send("hello from express!");
});

app.listen("3000");
console.log("server listening on port: 3000");
