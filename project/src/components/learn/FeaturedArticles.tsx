import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';

export default function FeaturedArticles() {
  const featuredArticles = articles.slice(0, 6);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredArticles.map((article, index) => (
          <Link
            key={index}
            to={`/learn/article/${article.slug}`}
            className="group"
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
                <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}