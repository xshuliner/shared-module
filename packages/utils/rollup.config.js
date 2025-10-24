import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
// import postcss from 'rollup-plugin-postcss';
import eslint from '@rollup/plugin-eslint';

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/esm/index.js',
      format: 'esm',
    },
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/umd/index.js',
      format: 'umd',
      name: '@xshuliner/utils',
    },
  ],

  // 将 React 和相关库设置为外部依赖，不打包
  // external: ['react', 'react-dom'],

  plugins: [
    // 处理 CSS/LESS 文件，并提取为独立文件
    // postcss({
    //   extract: true, // 独立导出 CSS 文件
    //   minimize: true, // 压缩 CSS
    // }),

    // ESLint 检查
    eslint({
      exclude: ['node_modules'], // 排除 node_modules
    }),

    // TypeScript 支持
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true, // 生成 .d.ts 类型声明文件
        },
      },
    }),

    // 解析 node_modules 中的第三方模块
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // 需要解析的文件扩展名
    }),

    // 将 CommonJS 模块转换为 ES6
    commonjs(),
  ],
};
