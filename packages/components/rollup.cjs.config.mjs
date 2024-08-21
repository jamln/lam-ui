import basicConfig, { name, jointFileDir } from './rollup.config.mjs'

export default {
  ...basicConfig,
  output: {
    name,
    file: jointFileDir('cjs'),
    format: 'cjs',
    inlineDynamicImports: true,
    // exports: 'named', 
    // // 如果有 exports 就补充文件尾
    // footer: ({ exports }) =>
    //   exports.length > 0
    //     ? 'module.exports = Object.assign(exports.default || {}, exports)'
    //     : '',
  }
}