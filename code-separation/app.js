const helper=require("./helpers");
const sum1=100;
const sum2=200;
const somma=helper.sum(sum1,sum2);
console.log(`la somma di ${sum1} e ${sum2}: ${somma}`);

//destructuring
const {sum}=require("./helpers");
console.log(sum(100,200));