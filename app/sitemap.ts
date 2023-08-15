import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.serp.one',
      lastModified: new Date(),
    },
  ]
}