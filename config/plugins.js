const { rebuildClient } = require('./client.config');
const { Server } = require('socket.io');
const chalk = require('chalk');

const StartPlugin = () => ({
  name: 'example',
  setup(build) {
    build.onStart(() => {
      build.initialOptions.clientBundler = rebuildClient();
    });
  },
});

const ReferPlugin = () => {
  const io = new Server(3001, {
    cors: {
      origin: '*',
    },
  });
  let socketInstance;
  io.on('connection', (socket) => {
    socketInstance = socket;
  });
  return {
    name: 'ReferPlugin',
    setup(build) {
      build.onEnd((result) => {
        if (socketInstance && build.initialOptions.clientBundler) {
          build.initialOptions.clientBundler.then(() => {
            socketInstance.emit('refer');
          });
          console.log(chalk.green(`Refer Page success...`));
        }
      });
    },
  };
};

module.exports = {
  StartPlugin,
  ReferPlugin,
};
