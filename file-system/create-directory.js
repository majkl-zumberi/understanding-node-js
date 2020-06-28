const path=require("path");

const fs=require("fs");


/**
 * make a directory with path & fs core modules
 * async
 * 
 * parameters: path, options, callback
 */

 fs.mkdir(path.join(__dirname,"test"),{},err=>{

     if(err) throw err;

     console.log("folder created..");
 })