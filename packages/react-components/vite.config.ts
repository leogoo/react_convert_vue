import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import typescript from '@rollup/plugin-typescript'
import path from 'path';

const resolvePath = (str) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({
      target: "es2015", // 这里指定编译到的版本，
      rootDir: resolvePath("packages/"),
      declaration: true,
      declarationDir: resolvePath("dist"),
      exclude: resolvePath("node_modules/**"),
      allowSyntheticDefaultImports: true,
    })
  ],
  build: {
    lib: {
      entry: resolvePath("packages/index.ts"),
      name: "react-components",
      // 打包格式
      formats: ['es', 'cjs'],
      fileName: format => `react-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "antd"],
      output: {
        globals: {
          react: "react",
          antd: "antd",
          "react-dom": "react-dom",
        },
      },
    }
  }
})
