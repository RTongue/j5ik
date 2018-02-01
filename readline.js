const Tessel = require('tessel-io');
const five = require('johnny-five');
const readline = require('readline');

const board = new five.Board({
  io: new Tessel()
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

board.on('ready', () => {
  console.log('Ready event - Repl initialized!');

  const led = new five.Led('a5');

  rl.on('line', (input) => {
      console.log('You typed:', input);
      led.toggle();
    }
  );

  led.on();
});
