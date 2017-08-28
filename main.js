const isOnline = require('is-online');
const Blinkt = require('blinktjs');
const blinkt = new Blinkt({defaultBrightness: 0.5});
 
console.log('Hello, world!');
blinkt.off();
function intervalFunc () {
  console.log('Testing connection...!');
  isOnline().then(online => {
    if(online){
      console.log("device connected to the internet")
      blinkt.setAll(0, 255, 0);
    }else {
      console.log("ERROR: no internet")
      blinkt.setAll(255, 0, 0);
    }
    blinkt.draw();
  })
  .catch(err => {
    console.log("ERROR: something weird happened")
  });
}

setInterval(intervalFunc, 600000);
