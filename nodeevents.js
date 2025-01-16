const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Water is full please turn of the motor');
  setTimeout(()=>{
    console.log('Turn of the motor its a gental reminder')    
  }, 3000)
});

console.log("Motor is runninng");
console.log("Motor is still runninng");



myEmitter.emit('WaterFull');