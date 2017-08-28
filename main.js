const isOnline = require('is-online');
const Blinkt = require('blinktjs');
const blinkt = new Blinkt({defaultBrightness: 0.5});
 
console.log('Hello, world!');
blinkt.off();
function intervalFunc () {
  console.log('Cant stop me now!');
  isOnline().then(online => {
    console.log("device connected to the internet")
    blinkt.setAll(0, 255, 0);
    blinkt.draw();
  })
  .catch(err => {
    console.log("ERROR: no internet")
    blinkt.setAll(255, 0, 0);
    blinkt.draw();
  });
}

setInterval(intervalFunc, 1500);
