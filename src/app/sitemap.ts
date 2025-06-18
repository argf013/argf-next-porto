import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://argf.web.id/'

  const routes = ['', 'blog', 'experience', 'projects', 'pixel-gallery']

  const sitemapEntries = routes.map(route => {
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }
  })

  return sitemapEntries
}
