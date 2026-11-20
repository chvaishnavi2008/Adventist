import React from 'react';

export default function SectionHeader({
  badge,
  badgeColor = 'health', // 'health', 'green', 'amber'
  title,
  subtitle,
  centered = true,
  className = '',
  light = false
}) {
  const badgeStyles = {
    health: 'bg-health-50 text-health-700 border-health-200',
    green: 'bg-sdaGreen-50 text-sdaGreen-700 border-sdaGreen-200',
    amber: 'bg-sdaAmber-50 text-sdaAmber-700 border-sdaAmber-200',
  };

  const dotStyles = {
    health: 'bg-health-600',
    green: 'bg-sdaGreen-600',
    amber: 'bg-sdaAmber-600',
  };

  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border mb-4 ${badgeStyles[badgeColor] || badgeStyles.health}`}>
          <span className={`w-2 h-2 rounded-full animate-pulse ${dotStyles[badgeColor] || dotStyles.health}`} />
          {badge}
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
