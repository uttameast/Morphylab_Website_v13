import React from 'react';
import { articles } from '../../data/articles';
import ArticleCard from './ArticleCard';

interface CategoryArticlesProps {
  category: string;
}

export default function CategoryArticles({ category }: CategoryArticlesProps) {
  const categoryArticles = articles.filter(article => article.category === category);

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8">{category}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
}