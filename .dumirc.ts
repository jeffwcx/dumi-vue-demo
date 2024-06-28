import { defineConfig } from 'dumi';
import path from 'node:path';

export default defineConfig({
  themeConfig: {
    name: 'test-demo',
  },
  mfsu: false,
  apiParser: {},
  resolve: {
    entryFile: './src/index.ts',
  },
  vue: {
    tsconfigPath: path.resolve(__dirname, './tsconfig.vue.json'),
  },
  presets: ['@dumijs/preset-vue'],
});
