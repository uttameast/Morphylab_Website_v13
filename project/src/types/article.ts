export interface Article {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  metaDescription?: string;
  keywords?: string[];
}