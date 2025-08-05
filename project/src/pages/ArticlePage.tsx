import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { articles } from '../data/articles';
import ArticleContent from '../components/learn/ArticleContent';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/learn" className="text-purple-600 hover:text-purple-700">
          Return to Knowledge Center
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/learn"
            className="inline-flex items-center text-white hover:text-orange-400 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Knowledge Center
          </Link>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <ArticleContent article={article} />
      </div>
    </div>
  );
}