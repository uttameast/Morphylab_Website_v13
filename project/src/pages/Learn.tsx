import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Video, ExternalLink, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';

interface Resource {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  type: 'guide' | 'whitepaper' | 'video';
  id: string;
}

const resources: Resource[] = [
  {
    title: 'Getting Started with Data Archival',
    description: 'A comprehensive guide to implementing data archival solutions in your organization.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    category: 'Guide',
    link: '/learn/getting-started',
    type: 'guide',
    id: 'getting-started'
  },
  {
    title: 'Data Compliance Best Practices',
    description: 'Learn about regulatory requirements and compliance strategies for data management.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=600',
    category: 'Whitepaper',
    link: '/learn/compliance-best-practices',
    type: 'whitepaper',
    id: 'compliance-best-practices'
  },
  {
    title: 'AI-Powered Data Analytics',
    description: 'Discover how AI transforms data analytics and improves decision-making.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    category: 'Video',
    link: '/learn/ai-analytics',
    type: 'video',
    id: 'ai-analytics'
  }
];

const categories = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Guides',
    description: 'Step-by-step tutorials and implementation guides',
    type: 'guide'
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Whitepapers',
    description: 'In-depth research and industry insights',
    type: 'whitepaper'
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: 'Video Tutorials',
    description: 'Visual learning resources and demonstrations',
    type: 'video'
  }
];

export default function Learn() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Knowledge Center</h1>
            <p className="text-xl text-purple-100">
              Explore our comprehensive resources to master data archival and management
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/learn/${category.type}`}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-gray-600 mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>

        {/* Latest Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article, index) => (
              <Link
                key={index}
                to={`/resources/blog/${article.slug}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
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
                  <div className="flex items-center text-purple-600">
                    <span className="text-sm">Read article</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <h2 className="text-2xl font-bold mb-8">Featured Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.link}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center text-purple-600">
                  <span className="text-sm">Learn more</span>
                  <ExternalLink className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Support Section */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you find the right resources
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}