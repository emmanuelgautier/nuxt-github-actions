import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1000,
    viewportHeight: 660,
    trashAssetsBeforeRuns: true
  }
})
