const commonjs = require('@rollup/plugin-commonjs');
const coffee = require('rollup-plugin-coffee-script');

const pkg = require('./package.json');

module.exports = {
  input: 'lib/main.coffee',
  external: ['atom'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    coffee(),
    commonjs({
      extensions: ['.js', '.coffee']
    }),
  ],
};