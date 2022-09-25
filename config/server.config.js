const esbuild = require('esbuild');
const path = require('path');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const { StartPlugin, ReferPlugin } = require('./plugins');

esbuild.build({
  target: 'node14',
  entryPoints: [path.resolve(__dirname, './server/index.tsx')],
  bundle: true,
  incremental: true,
  watch: true,
  plugins: [nodeExternalsPlugin(), StartPlugin(), ReferPlugin()],
  outfile: path.resolve(__dirname, '../', 'build', 'server.js'),
});
