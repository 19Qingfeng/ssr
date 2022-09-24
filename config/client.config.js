const esbuild = require('esbuild');
const path = require('path');

esbuild.build({
  entryPoints: [path.resolve(__dirname, './client/index.tsx')],
  bundle: true,
  watch: true,
  outfile: path.resolve(__dirname, '../', 'public', 'main.js'),
});
