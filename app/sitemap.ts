const ROUTES = ['', '/the-show', '/conversations', '/guests', '/meet-anil', '/campus']

export default function sitemap() {
  const base = 'https://abtalks-redesign-five-tan.vercel.app'
  return ROUTES.map((route) => ({
    url: base + route,
    lastModified: new Date(),
  }))
}
