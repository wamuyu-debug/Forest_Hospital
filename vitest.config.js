import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)

/* <v-row justify="center" class="mb-4"> */
    /* <v-btn color="primary" @click="navigateTo('Login')">Login</v-btn> */
      // <v-btn color="secondary" @click="navigateTo('SignUp')">signUp</v-btn>
    //  </v-row>