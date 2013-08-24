var ForkExample = require('../index.js');

var fe = new ForkExample();
fe.on('event',console.log);
fe.start(4);