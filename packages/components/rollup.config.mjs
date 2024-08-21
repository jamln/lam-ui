// import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
// import typescript from 'rollup-plugin-typescript2';
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss'

import { nodeResolve } from '@rollup/plugin-node-resolve';

const name = 'lam-ui'
const jointFileDir = (type) => `dist/index.${type}.js`

/* const tsOverrides = {
  declaration: true, // 是否创建 typescript 声明文件
  sourceMap: false,
  exclude: [ // 排除项
    'node_modules',
    'src/test.vue',
    'with-install.ts'
  ]
} */

export { name, jointFileDir }

export default [{
  input: 'index.ts',
  external: ['vue'],
  plugins:[
    vue(),
    // typescript({ ...tsOverrides }),
    esbuild(),
    nodeResolve({
      extensions: ['.ts', '.js', '.vue']
    }),
    postcss({
      // 把 css 放到和js同一目录
      extract: true,
      extract: 'index.css'

    }),
    commonjs({
      include: ["node_modules/**/*"],
    }),
  ],
  output: {
    name,
    file: jointFileDir('es'),
    format: 'es',
    inlineDynamicImports: true,
  }
},
{
  input: 'types/index.d.ts',
  external: [],
  plugins:[
    dts({
      // https://github.com/Swatinem/rollup-plugin-dts/issues/143
      compilerOptions: { preserveSymlinks: false, sourceMap: false },
      respectExternal: true,
    })
  ],
  output: {
    name,
    file: 'dist/index.d.ts',
    format: 'es',
    inlineDynamicImports: true,
  }
}
]