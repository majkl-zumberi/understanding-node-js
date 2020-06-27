const fs=require("fs");
const fileName="target.txt";

/**
 * esempio di nodeJS:
 * sappiamo che è single threaded
 * ma è non-blocking I/O model
 * (qui lascia la responsabilità alla call back e continua ad eseguire il codice)
 * 
 * Esempio asincrono
 */
fs.readFile(fileName,(err,data)=>{
    if(err){
         console.log(err);
    }else{
        console.log(data.toString());
    }
});

console.log("node js file sys");