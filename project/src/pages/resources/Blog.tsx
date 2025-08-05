import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import { Helmet } from 'react-helmet';
import { formatDate } from '../../utils/dateUtils';

export default function Blog() {
  const featuredPost = articles[0];
  const recentPosts = articles.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog | MorphyLab</title>
        <meta name="description" content="Insights and updates from our data archival experts" />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section with Pattern Background */}
        <div className="relative bg-purple-900 text-white py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Latest Insights
              </h1>
              <p className="text-xl text-purple-100">
                Expert perspectives on data archival, security, and management
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-16 pb-20">
          {/* Featured Post */}
          <div className="mb-20">
            <Link
              to={`/resources/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <div className="absolute inset-0 bg-purple-900 mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity"></div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12">
                  <div className="flex items-center mb-6">
                    <span className="bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1.5 rounded-full">
                      Featured
                    </span>
                    <span className="ml-3 bg-orange-100 text-orange-600 text-sm font-medium px-4 py-1.5 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(featuredPost.publishDate)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{Math.ceil(featuredPost.content.length / 1500)} min read</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center text-purple-600 group-hover:text-purple-700">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Recent Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/resources/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 lg:h-56">
                    <div className="absolute inset-0 bg-purple-900 mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity"></div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-purple-600 text-sm font-medium px-3 py-1.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{Math.ceil(post.content.length / 1500)} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}