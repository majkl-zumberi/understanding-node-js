const os=require("os");
const { O_DIRECT } = require("constants");

//Platform
/**
 * mac: darwin
 * windows: win32
 */
console.log(os.platform());


//CPU architecture
console.log(os.arch());
 
