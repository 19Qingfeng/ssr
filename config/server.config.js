const esbuild = require('esbuild');
const path = require('path');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

esbuild.build({
  target: 'node14',
  entryPoints: [path.resolve(__dirname, './server/index.tsx')],
  bundle: true,
  watch: true,
  plugins: [nodeExternalsPlugin()],
  outfile: path.resolve(__dirname, '../', 'build', 'server.js'),
});
