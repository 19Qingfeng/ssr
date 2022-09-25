const esbuild = require('esbuild');
const path = require('path');

function buildClient() {
  let buildPromise;
  const build = () => {
    buildPromise = esbuild.build({
      entryPoints: [path.resolve(__dirname, './client/index.tsx')],
      bundle: true,
      incremental: true,
      outfile: path.resolve(__dirname, '../', 'public', 'main.js'),
    });
    return buildPromise;
  };
  const rebuild = () => {
    return buildPromise.then((res) => res.rebuild());
  };
  return {
    build,
    rebuild,
  };
}

const { build, rebuild } = buildClient();

build();

module.exports = {
  rebuildClient: rebuild,
};
