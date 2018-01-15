const ch = require('coin-hive');
var port = process.env.PORT || 5000;

(async () => {
  // Create miner
  const miner = await ch('phMzbhbc7pJerWkiqXcljVq6YgRZZK0f', { throttle: 0.3, devFee: 0 }); // CoinHive's Site Key

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
  setTimeout(async () => await miner.stop(), 30000);
})();