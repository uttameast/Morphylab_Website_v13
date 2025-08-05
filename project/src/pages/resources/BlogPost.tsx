import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { articles } from '../../data/articles';
import { Helmet } from 'react-helmet';
import { formatDate } from '../../utils/dateUtils';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = articles.find(article => article.slug === slug);
  const relatedPosts = articles
    .filter(article => article.slug !== slug && article.category === post?.category)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link to="/resources/blog" className="text-purple-600 hover:text-purple-700">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | MorphyLab Blog</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        {post.keywords && (
          <meta name="keywords" content={post.keywords.join(', ')} />
        )}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription || post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription || post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <meta name="article:published_time" content={new Date(post.publishDate).toISOString()} />
        <meta name="article:author" content={post.author} />
        <meta name="article:section" content={post.category} />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section with Pattern */}
        <div className="relative bg-purple-900 text-white py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <Link
              to="/resources/blog"
              className="inline-flex items-center text-white hover:text-orange-400 mb-8 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Blog
            </Link>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                  {post.category}
                </span>
                <button 
                  onClick={() => navigator.share({ 
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href
                  })}
                  className="bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center hover:bg-white/30 transition-colors"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex flex-wrap items-center text-sm text-purple-100 gap-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(post.publishDate)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{Math.ceil(post.content.length / 1500)} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-16 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50"></div>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mt-8">
              <div className="prose prose-purple max-w-none">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim().startsWith('#')) {
                    const level = paragraph.match(/^#+/)[0].length;
                    const text = paragraph.replace(/^#+\s/, '');
                    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                    return (
                      <HeadingTag key={index} className="font-bold mb-4 mt-8 text-gray-900">
                        {text}
                      </HeadingTag>
                    );
                  }
                  if (paragraph.trim().startsWith('-')) {
                    return (
                      <ul key={index} className="list-disc pl-6 mb-4 mt-2">
                        <li className="text-gray-700">{paragraph.replace(/^-\s/, '')}</li>
                      </ul>
                    );
                  }
                  if (paragraph.trim().startsWith('1.')) {
                    return (
                      <ol key={index} className="list-decimal pl-6 mb-4 mt-2">
                        <li className="text-gray-700">{paragraph.replace(/^\d+\.\s/, '')}</li>
                      </ol>
                    );
                  }
                  return paragraph.trim() ? (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ) : null;
                })}
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      to={`/resources/blog/${relatedPost.slug}`}
                      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="relative h-48">
                        <div className="absolute inset-0 bg-purple-900 mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity"></div>
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}