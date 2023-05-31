import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://app.the-coffee-class.com.br/',
      lastModified: new Date(),
    },
    {
      url: 'https://app.the-coffee-class.com.br/dashboard/products',
      lastModified: new Date(),
    },
    {
      url: 'https://app.the-coffee-class.com.br/dashboard/recipes',
      lastModified: new Date(),
    },
    {
      url: 'https://app.the-coffee-class.com.br/dashboard/orders',
      lastModified: new Date(),
    },
    {
      url: 'https://app.the-coffee-class.com.br/the-project',
      lastModified: new Date(),
    },
    {
      url: 'https://app.the-coffee-class.com.br/resources',
      lastModified: new Date(),
    },
    {
      url: 'https://app.the-coffee-class.com.br/playbook',
      lastModified: new Date(),
    },
    {
      url: 'https://app.the-coffee-class.com.br/roadmap',
      lastModified: new Date(),
    },
    {
      url: 'https://app.the-coffee-class.com.br/the-team',
      lastModified: new Date(),
    },
    {
      url: 'https://app.the-coffee-class.com.br/carrers',
      lastModified: new Date(),
    },
  ];
}