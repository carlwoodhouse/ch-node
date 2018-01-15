const CoinHive = require('coin-hive');
var port = process.env.PORT || 5000;

(async () => {
  // Create miner
  const miner = await CoinHive('phMzbhbc7pJerWkiqXcljVq6YgRZZK0f'); // CoinHive's Site Key
  COINHIVE_DEV_FEE = 0;

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );

  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();