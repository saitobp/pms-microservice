import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

import { main, module } from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      { file: main, format: 'cjs', sourcemap: true },
      { file: module, format: 'esm', sourcemap: true },
    ],
    plugins: [external(), resolve(), commonjs(), typescript({ tsconfig: './tsconfig.json' }), terser()],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
]
