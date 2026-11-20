import React, { useState } from 'react';
import { 
  Calendar, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  X,
  Newspaper,
  BookOpen
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { NEWS_STORIES } from '../../data/newsData';

export default function NewsStoriesSection({ isStandalonePage = false }) {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <section id="news" className={`py-16 lg:py-24 ${isStandalonePage ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          badge="Editorial & Mission Updates"
          badgeColor="health"
          title="News, Stories & Mission Highlights"
          subtitle="Recent healthcare developments, community medical camps, and academic convocation updates across our institutions."
        />

        {/* 3-Column Editorial Grid (Sterling Inspired News Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_STORIES.slice(0, 3).map((story) => (
            <article 
              key={story.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-health-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                
                {/* Story Image */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-navy-950/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                    {story.category}
                  </div>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-health-600" />
                    <span>{story.formattedDate}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{story.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy-900 group-hover:text-health-700 transition-colors line-clamp-2 mb-3 leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {story.excerpt}
                  </p>

                </div>

              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-auto">
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    By {story.author}
                  </span>
                  <button
                    onClick={() => setActiveStory(story)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-health-700 hover:text-navy-900 transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Modal for Reading Story */}
        {activeStory && (
          <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-health-700 bg-health-50 px-2.5 py-1 rounded-md">
                  {activeStory.category}
                </span>
                <button 
                  onClick={() => setActiveStory(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-navy-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="h-56 w-full rounded-2xl overflow-hidden mb-5">
                <img 
                  src={activeStory.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mb-2 leading-tight">
                {activeStory.title}
              </h2>

              <div className="flex items-center gap-3 text-xs text-slate-400 mb-6 pb-4 border-b border-slate-100">
                <span>Published on {activeStory.formattedDate}</span>
                <span>•</span>
                <span>By {activeStory.author}</span>
                <span>•</span>
                <span>{activeStory.readTime}</span>
              </div>

              <div 
                className="text-sm text-slate-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: activeStory.content }}
              />

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-5 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-navy-800 transition-colors shadow"
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
