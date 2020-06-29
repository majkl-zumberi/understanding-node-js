const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/about.html?id=3&status=active');

//Serialized URL
console.log(myUrl.href);

//Host (root domain)
console.log(myUrl.host);

//Hostname (no port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Serialized query (params after ?)
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//append some params
myUrl.searchParams.append('abc',"123");
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));