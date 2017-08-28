const isOnline = require('is-online');
const blinkt = require('blinkt');
 
console.log('Hello, world!');
blinkt.clear();
function intervalFunc () {
  console.log('Cant stop me now!');
  isOnline().then(online => {
    console.log("device connected to the internet")
    blinkt.setPixels(0, 255, 0, 1);
    blinkt.show();
  })
  .catch(err => {
    console.log("ERROR: no internet")
    blinkt.setPixels(255, 0, 0, 1);
    blinkt.show();
  });
}

setInterval(intervalFunc, 1500);
