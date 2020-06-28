//Create and write a file

//requiring core modules
const path=require("path");

const fs=require("fs");

const myPath=path.join(__dirname,"test","ciao.txt");


fs.writeFile(myPath,"ciao da nodeJS",err=>{
    if(err) throw err;

    console.log("file written");


    fs.appendFile(myPath,"\ndi nuovo ciao!",err=>{

        if(err) throw err;

        console.log("file written pt2");
    })
});