const Logger = require('./logger');

const fs = require("fs");

const logger = new Logger();
const path="./logger.txt";

function objToText(msg){
    let text='';
    console.log(Object.keys(msg));
    Object.keys(msg).forEach(key=>{
        text+="\n"+msg[key];
    });
    return text;
}


logger.on("message",data=>{
    console.log('called listener',data);
    
    fs.appendFile(path,objToText(data),err=>{
        //file not found
        if(err){
            if(err.code =="ENOENT"){
                fs.writeFile(path,objToText(data),err=>{
                    if(err) throw err
                })
            }
        }
    })
});

logger.log("hello from nodeJS");
logger.log("hello from nodeJS pt2");