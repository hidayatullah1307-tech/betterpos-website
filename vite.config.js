import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import { readdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function getBlogSlugs() {
  const postsDir = resolve(__dirname, 'src/blog/posts')
  try {
    return readdirSync(postsDir)
      .filter(f => f.endsWith('.js'))
      .map(f => `/blog/${f.slice(0, -3)}`)
  } catch {
    return []
  }
}

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://betterpos.my.id',
      dynamicRoutes: [
        '/fitur',
        '/blog',
        '/kemitraan',
        ...getBlogSlugs(),
      ],
    }),
  ],
})
