const Tessel = require('tessel-io');
const five = require('johnny-five');

const board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  console.log('Ready event - Repl initialized!');

  const led = new five.Led('a5');

  board.repl.inject({
    test: () => {
      console.log('TESTING 1, 2, 3...');
    }
  });

  led.on();
});

