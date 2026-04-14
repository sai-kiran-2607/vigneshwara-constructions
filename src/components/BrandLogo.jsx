import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function BrandLogo({
  size = 'md',
  light = false,
  linked = false,
  stacked = false,
  showText = true,
  className = '',
  mobileShowText = true,
}) {
  const sizes = {
    sm: 'h-8 w-auto sm:h-10',
    md: 'h-10 w-auto sm:h-14',
    lg: 'h-14 w-auto sm:h-20',
  };
  const textPrimary = light ? 'text-white' : 'text-primary';
  const textSecondary = light ? 'text-slate-200' : 'text-slateWarm';

  const content = (
    <div className={`flex ${stacked ? 'flex-col items-center text-center' : 'items-center'} gap-2 sm:gap-3 ${className}`}>
      <img
        src={logo}
        alt="VC logo"
        className={`${sizes[size]} shrink-0 object-contain`}
      />
      {showText && (
        <div className="min-w-0">
          <div className={`font-display text-[13px] font-bold uppercase leading-none tracking-[0.08em] sm:text-xl sm:tracking-[0.18em] ${textPrimary} ${mobileShowText ? '' : 'hidden sm:block'}`}>
            Vigneshwara
          </div>
          <div className={`mt-1 text-[8px] font-semibold uppercase leading-none tracking-[0.18em] sm:text-xs sm:tracking-[0.34em] ${textSecondary} ${mobileShowText ? '' : 'hidden sm:block'}`}>
            Constructions
          </div>
        </div>
      )}
    </div>
  );

  if (linked) {
    return <Link to="/">{content}</Link>;
  }

  return content;
}
