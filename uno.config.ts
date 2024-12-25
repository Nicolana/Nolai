import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#0070f3',
    },
  },
  rules: [
    ['block', { display: 'block' }],
    ['flex', { display: 'flex' }],
    ['center', { justifyContent: 'center', alignItems: 'center' }],
  ],
})