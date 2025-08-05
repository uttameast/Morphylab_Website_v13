import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Article } from '../../types/article';
import { formatDate } from '../../utils/dateUtils';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-8">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
            {article.category}
          </span>
        </div>
        <div className="prose prose-purple max-w-none">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium text-gray-900">{article.author}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(article.publishDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}