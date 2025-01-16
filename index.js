const os = require('os')
const fs = require('fs')

// console.log(os.hostname());
// console.log(os.platform());
// // console.log(os.networkInterfaces());
// console.log(os.freemem());
// console.log(os.homedir());

// Reading a file
// fs.readFile('file.txt','utf8', (error, data)=> {
//     console.log(error, data);    
// })

const sys =  {
    platform: os.platform(),
    arch: os.arch(),
    cpuCores: os.cpus().length,
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    uptime: os.uptime(),
    homeDir: os.homedir(),
  };

const datatowrite = JSON.stringify(sys, null,2)

const info = fs.writeFileSync('info.txt', datatowrite, (err)=>{
    if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Data written to file successfully!');
      }
})


console.log(datatowrite);
