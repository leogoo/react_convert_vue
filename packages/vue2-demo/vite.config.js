import { defineConfig } from 'vite';
import { createVuePlugin} from 'vite-plugin-vue2'
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [createVuePlugin(), reactRefresh()],
});