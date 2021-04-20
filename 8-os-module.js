const os = require('os');

//user info
const info = os.userInfo();
// console.log(info);

//returns system running up time in second
console.log(`The up time is ${os.uptime()}`);

const currntOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currntOS);