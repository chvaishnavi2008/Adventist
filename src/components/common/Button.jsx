import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm';

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5 font-semibold'
  };

  const variants = {
    primary: 'bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-900 hover:shadow-md hover:-translate-y-0.5',
    health: 'bg-health-600 text-white hover:bg-health-700 focus:ring-health-600 hover:shadow-md hover:-translate-y-0.5',
    outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white focus:ring-navy-900',
    'outline-health': 'border-2 border-health-600 text-health-700 hover:bg-health-600 hover:text-white focus:ring-health-600',
    'outline-white': 'border-2 border-white/90 text-white hover:bg-white hover:text-navy-900 focus:ring-white',
    amber: 'bg-sdaAmber-600 text-white hover:bg-sdaAmber-700 focus:ring-sdaAmber-500 hover:shadow-md hover:-translate-y-0.5',
    ghost: 'text-navy-900 hover:bg-navy-50 focus:ring-navy-500 shadow-none'
  };

  const combinedClasses = `${baseClasses} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
