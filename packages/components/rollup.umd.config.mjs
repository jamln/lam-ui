import basicConfig, { name, jointFileDir } from './rollup.config.mjs'

export default {
  ...basicConfig,
  output: {
    name,
    file: jointFileDir('umd'),
    format: 'umd',
    exports: "named",
    inlineDynamicImports: true,
    globals: {
      vue: 'Vue',
    }
  }
}