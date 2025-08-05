import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types/article';
import { formatDate } from '../../utils/dateUtils';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/learn/article/${article.slug}`}
      className="group block"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full mb-4">
            {article.category}
          </span>
          <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 line-clamp-2 mb-4">{article.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{article.author}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(article.publishDate)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}