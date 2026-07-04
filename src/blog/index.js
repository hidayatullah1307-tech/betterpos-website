const modules = import.meta.glob('./posts/*.js', { eager: true })

export const posts = Object.values(modules)
  .map(m => m.default)
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPost(slug) {
  return posts.find(p => p.slug === slug)
}
