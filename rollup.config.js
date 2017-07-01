import riot from 'rollup-plugin-riot'
import buble from 'rollup-plugin-buble'
import cjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'app/main.js',
  format: 'iife',
  moduleName: 'app',
  plugins: [ 
    riot(),
    resolve(),
    cjs(),
    buble(),
  ],
  external: ['firebase'],
  globals: {
    firebase: 'firebase'
  },
  dest: 'public/dest/bundle.js'
}
