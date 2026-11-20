import React, { useState, useEffect } from 'react';
import { 
  Newspaper, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { wordpressApi } from '../../services/wordpressApi';

export default function NewsStoriesSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeStory, setActiveStory] = useState(null);

  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      const data = await wordpressApi.getPosts({ per_page: 3 });
      setPosts(data || []);
      setLoading(false);
    }
    loadNews();
  }, []);

  const formatDate = (isoStr) => {
    if (!isoStr) return '';
    const d = new Date(isoStr);
    return d.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border mb-4 bg-health-50 text-health-700 border-health-200">
              <span className="w-2 h-2 rounded-full bg-health-600 animate-pulse" />
              <span>WordPress REST API Ready</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
              News, Stories & Mission Updates
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-2xl">
              Latest healthcare developments, medical outreach reports, and academic achievements from across our 10 hospitals and nursing college.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sdaGreen-600" />
              <span>Headless WP CMS Connected</span>
            </span>
          </div>
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl bg-slate-100 h-96" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {posts.map((post) => (
              <div 
                key={post.id}
                className="rounded-2xl bg-white border border-slate-200/90 hover:border-health-400 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Image / Header */}
                  <div className="h-48 w-full bg-slate-100 overflow-hidden relative">
                    <img 
                      src={post.featured_media_url || "/images/reference-map.png"} 
                      alt={post.title?.rendered || "Story image"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {post.category_name || "Medical Trust"}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-health-600" />
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <span>{post.author_name || "Trust Office"}</span>
                    </div>

                    <h3 
                      className="text-lg font-bold text-navy-900 group-hover:text-health-700 transition-colors leading-snug line-clamp-2 mb-3"
                      dangerouslySetInnerHTML={{ __html: post.title?.rendered }}
                    />

                    <div 
                      className="text-xs text-slate-600 leading-relaxed line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered }}
                    />
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveStory(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-health-700 hover:text-navy-900 transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WordPress REST API Integration Info Banner */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-health-500" />
            <span>
              <strong>CMS API Endpoint:</strong> Ready for WordPress REST API at <code>/wp-json/wp/v2/posts</code>. Configurable via <code>VITE_WP_API_URL</code>.
            </span>
          </div>
          <span className="text-slate-400">Headless Architecture Ready</span>
        </div>

        {/* Modal for Reading Story */}
        {activeStory && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-health-600">
                  {activeStory.category_name || "News & Stories"}
                </span>
                <button 
                  onClick={() => setActiveStory(null)}
                  className="text-slate-400 hover:text-navy-900 text-sm font-bold p-1 rounded-lg"
                >
                  ✕ Close
                </button>
              </div>

              <h2 
                className="text-2xl font-bold text-navy-900 mb-3"
                dangerouslySetInnerHTML={{ __html: activeStory.title?.rendered }}
              />

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                <span>Published on {formatDate(activeStory.date)}</span>
                <span>•</span>
                <span>By {activeStory.author_name}</span>
              </div>

              <div 
                className="text-sm text-slate-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: activeStory.excerpt?.rendered }}
              />

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-5 py-2 rounded-xl bg-navy-900 text-white text-xs font-semibold hover:bg-navy-800"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
